import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Public } from "src/auth/public";
import { CreateRoleInput } from "./dto/create.role.input";
import { UpdateRoleInput } from "./dto/update.role.input";
import { Role } from "./role.entity";
import { RolesService } from "./roles.service";

@Resolver(() => Role)
export class RolesResolver {
    constructor(
        private readonly rolesService: RolesService,
    ) {}

    // QUERIES
    @Query(() => [Role])
    async getRoles() {
        return await this.rolesService.getRoles();
    }

    @Query(() => Role)
    async getRole(@Args('id') id: string) {
        return await this.rolesService.getRole(id)
    }

    // MUTATIONS
    @Mutation(() => Role)
    @Public()
    async createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
        return await this.rolesService.createRole(createRoleInput);
    }

    @Mutation(() => Role)
    async deleteRole(@Args('id') id: string) {
        return await this.rolesService.deleteRole(id);
    }

    @Mutation(() => Role)
    async updateRole(@Args('updateRoleInput') updateRoleInput: UpdateRoleInput) {
        return await this.rolesService.updateRole(updateRoleInput);
    }

}