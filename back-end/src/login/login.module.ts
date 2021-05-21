import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { Login } from "./login.entity";
import { LoginResolver } from "./login.resolver";
import { LoginService } from "./login.service";

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([Login])
    ],
    providers: [LoginResolver, LoginService],
    exports: [LoginService],
})

export class LoginModule {}