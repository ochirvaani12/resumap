import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoginModule } from "src/login/login.module";
import { Recruiter } from "./recruiter.entity";
import { RecruitersResolver } from "./recruiters.resolver";
import { RecruitersService } from "./recruiters.service";

@Module({
    imports: [
        LoginModule,
        TypeOrmModule.forFeature([Recruiter])
    ],
    providers: [RecruitersService, RecruitersResolver],
    exports: [RecruitersService],
})

export class RecruitersModule {}