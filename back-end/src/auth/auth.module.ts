import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Candidates } from "src/candidates/candidate.entity";
import { LoginRole } from "src/loginRoles/loginRole.entity";
import { Recruiter } from "src/recruiters/recruiter.entity";
import { Role } from "src/roles/role.entity";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants"
import { RolesGuard } from "./roles.guard";

@Module({
    imports: [
        TypeOrmModule.forFeature([Recruiter, Candidates, LoginRole, Role]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '36000s' },
        }),
        PassportModule.register({
            defaultStrategy: "jwt"
        }),
    ],
    providers: [
        AuthService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        }
    ],
    exports: [AuthService],
})

export class AuthModule {}