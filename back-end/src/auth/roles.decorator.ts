import { SetMetadata } from '@nestjs/common';
import { Roles } from './role.enum';

export const ROLES_KEY = 'roles';
export const Roles1 = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);