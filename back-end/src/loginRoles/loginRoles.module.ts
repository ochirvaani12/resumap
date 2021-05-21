import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoginModule } from "src/login/login.module";
import { RolesModule } from "src/roles/roles.module";
import { LoginRole } from "./loginRole.entity";
import { LoginRolesResolver } from "./loginRoles.resolver";
import { LoginRolesService } from "./loginRoles.service";

@Module({
    imports: [
        LoginModule,
        RolesModule,
        TypeOrmModule.forFeature([LoginRole])
    ],
    providers: [LoginRolesResolver, LoginRolesService],
    exports: []
})

export class LoginRolesModule {}