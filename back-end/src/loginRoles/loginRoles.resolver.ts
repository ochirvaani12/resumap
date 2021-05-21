import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Public } from "src/auth/public";
import { Login } from "src/login/login.entity";
import { LoginService } from "src/login/login.service";
import { Role } from "src/roles/role.entity";
import { RolesService } from "src/roles/roles.service";
import { CreateLoginRoleInput } from "./dto/create.loginRole.input";
import { UpdateLoginRoleInput } from "./dto/update.loginRole.input";
import { LoginRole } from "./loginRole.entity";
import { LoginRolesService } from "./loginRoles.service";

@Resolver(() => LoginRole)
export class LoginRolesResolver {
    constructor(
        private readonly loginRolesService: LoginRolesService,
        private readonly rolesService: RolesService,
        private readonly loginService: LoginService,
    ) {}

    // QUERIES
    @Query(() => [LoginRole])
    async getLoginRoles() {
        return await this.loginRolesService.getLoginRoles();
    }

    @Query(() => LoginRole)
    async getLoginRole(@Args('id') id: string) {
        return await this.loginRolesService.getLoginRole(id);
    }

    // RESOLVEFIELD
    @ResolveField(() => Role)
    async role(@Parent() loginRole: LoginRole) {
        return await this.rolesService.getRole(loginRole.roleId);
    }

    @ResolveField(() => Login)
    async login(@Parent() loginRole: LoginRole) {
        return await this.loginService.getLoginData(loginRole.loginId);
    }

    // MUTATIONS
    @Mutation(() => LoginRole)
    @Public()
    async createLoginRole(@Args('createLoginRoleInput') createLoginRoleInput: CreateLoginRoleInput) {
        return await this.loginRolesService.createLoginRole(createLoginRoleInput);
    }

    @Mutation(() => LoginRole)
    async deleteLoginRole(@Args('id') id: string) {
        return await this.loginRolesService.deleteLoginRole(id);
    }

    @Mutation(() => LoginRole)
    async updateLoginRole(@Args('updateLoginRoleInput') updateLoginRoleInput: UpdateLoginRoleInput) {
        return await this.loginRolesService.updateLoginRole(updateLoginRoleInput);
    }

}