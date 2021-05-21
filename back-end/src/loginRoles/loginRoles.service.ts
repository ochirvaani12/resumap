import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateLoginRoleInput } from "./dto/create.loginRole.input";
import { UpdateLoginRoleInput } from "./dto/update.loginRole.input";
import { LoginRole } from "./loginRole.entity";

@Injectable()
export class LoginRolesService {
    constructor(
        @InjectRepository(LoginRole) private loginRolesRepository: Repository<LoginRole>, 
    ) {}

    async getLoginRoles(): Promise<LoginRole[]> {
        return await this.loginRolesRepository.find({});
    }

    async getLoginRole(id: string): Promise<LoginRole> {
        return await this.loginRolesRepository.findOneOrFail({id: id});
    }

    async createLoginRole(createLoginRoleInput: CreateLoginRoleInput): Promise<LoginRole> {
        return await this.loginRolesRepository.save(createLoginRoleInput);
    }

    async deleteLoginRole(id: string): Promise<LoginRole> {
        const loginRole = await this.loginRolesRepository.findOneOrFail({id: id});
        this.loginRolesRepository.remove(loginRole);
        return loginRole;
    }

    async updateLoginRole(updateLoginRoleInput: UpdateLoginRoleInput): Promise<LoginRole> {
        if(await this.loginRolesRepository.findOneOrFail({id: updateLoginRoleInput.id})) {
            const updatedLoginRole = this.loginRolesRepository.create(updateLoginRoleInput);
            return await this.loginRolesRepository.save(updatedLoginRole);
        }
    }
}