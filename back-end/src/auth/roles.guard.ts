import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { jwtConstants } from './constants';
import { Roles } from './role.enum';
import { ROLES_KEY } from './roles.decorator';
import * as jwt from 'jsonwebtoken';
import { GqlExecutionContext } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginRole } from 'src/loginRoles/loginRole.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/roles/role.entity';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        @InjectRepository(LoginRole) private loginRoleRepository: Repository<LoginRole>,
        @InjectRepository(Role) private roleRepository: Repository<Role>,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) {
            return true;
        }

        const ctx = GqlExecutionContext.create(context).getContext();
        const id = await this.validateToken(ctx.headers.authorization);
        const userRole = await this.getRole(id);
        return requiredRoles.some((role) => {
            if(role == userRole) {
                return true;
            }
        })
    }

    async validateToken(auth: string) {
        if (auth.split(' ')[0] !== 'Bearer') {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        const token = auth.split(' ')[1];
        try {
            const decoded = <any>jwt.verify(token, jwtConstants.secret);
            return decoded.id;
        } catch (err) {
            const message = 'Token error: ' + (err.message || err.name);
            throw new HttpException(message, HttpStatus.UNAUTHORIZED);
        }
    }

    async getRole(id: any) {
        const loginRole = await this.loginRoleRepository.findOneOrFail({loginId: id});
        const roleId = loginRole.roleId;
        const role = await this.roleRepository.findOneOrFail({id: roleId})
        return role.name; 
    }
}