import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { Public } from "src/auth/public";
import { LoginInput } from "./dto/login.input";
import { RegisterInput } from "./dto/register.input";
import { Login } from "./login.entity";
import { LoginService } from "./login.service";

@Resolver(() => Login)
export class LoginResolver {
    constructor(
        private readonly loginService: LoginService,
    ) {}

    @Mutation(() => Login)
    @Public()
    async register(@Args('registerInput') registerInput: RegisterInput) {
        return await this.loginService.register(registerInput);
    }

    @Mutation(() => Login)
    @Public()
    async login(@Args('loginInput') loginInput: LoginInput) {
        return await this.loginService.login(loginInput);
    }

    @Mutation(() => Login)
    @Public()
    async deleteLoginData(@Args('id') id: string) {
        return await this.loginService.deleteLoginData(id);
    }

    @Query(() => Login)
    @Public()
    async getLoginData(@Args('id') id: string) {
        return await this.loginService.getLoginData(id);
    }
}