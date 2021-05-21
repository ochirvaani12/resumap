import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRoleInput } from "./dto/create.role.input";
import { UpdateRoleInput } from "./dto/update.role.input";
import { Role } from "./role.entity";

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role) private rolesRepository: Repository<Role>,
    ) {}

    async getRoles(): Promise<Role[]> {
        return await this.rolesRepository.find({});
    }

    async getRole(id: string): Promise<Role> {
        return await this.rolesRepository.findOneOrFail({id: id});
    }

    async createRole(createRoleInput: CreateRoleInput): Promise<Role> {
        return await this.rolesRepository.save(createRoleInput);
    }

    async deleteRole(id: string): Promise<Role> {
        const role = await this.rolesRepository.findOneOrFail({id: id});
        this.rolesRepository.remove(role);
        return role;
    }

    async updateRole(updateRoleInput: UpdateRoleInput): Promise<Role> {
        if(await this.rolesRepository.findOneOrFail({id: updateRoleInput.id})) {
            const updatedRole = this.rolesRepository.create(updateRoleInput);
            return await this.rolesRepository.save(updatedRole);
        }
    }
}