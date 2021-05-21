import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthService } from "src/auth/auth.service";
import { Repository } from "typeorm";
import { LoginInput } from "./dto/login.input";
import { RegisterInput } from "./dto/register.input";
import { Login } from "./login.entity";

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(Login) private loginRepository: Repository<Login>,
        private readonly authService: AuthService,
    ) {}

    async register(registerInput: RegisterInput): Promise<Login> {
        const validation = await this.loginRepository.findOne({email: registerInput.email});
        if(validation){
            throw new Error("Email is already registered!");
        } else{
            const login = new Login();
            login.id = registerInput.id;
            login.email = registerInput.email;
            login.password = await this.authService.hashPassword(registerInput.password);
            login.token = await this.authService.generateJWT(registerInput.id);
            return await this.loginRepository.save(login);
        }
        
    }

    async login(loginInput: LoginInput): Promise<Login> {
        const login = await this.loginRepository.findOne({email: loginInput.email});
        if(login){
            const validation = await this.authService.comparePassword(loginInput.password, login.password);
            if(validation){
                login.token = await this.authService.generateJWT(login.id);
                return login;
            }
            else throw new Error("Email or password is incorrect!");
        } else throw new Error("Email or password is incorrect!");
    }

    async getLoginData(id: string): Promise<Login> {
        const loginData = await this.loginRepository.findOne({id: id});
        if(loginData){
            loginData.token = await this.authService.generateJWT(id);
            return loginData
        } 
        return null;
    }

    async deleteLoginData(id: string): Promise<Login> {
        const loginData = await this.loginRepository.findOne({id: id});
        if(loginData){
            this.loginRepository.remove(loginData);
            return loginData;
        }
        return null;
    }
}