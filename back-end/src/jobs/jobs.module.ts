import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CompaniesModule } from "src/companies/companies.module";
import { RecruitersModule } from "src/recruiters/recruiters.module";
import { Job } from "./job.entity";
import { JobsResolver } from "./jobs.resolver";
import { JobsService } from "./jobs.service";

@Module({
    imports: [
        RecruitersModule,
        CompaniesModule,
        TypeOrmModule.forFeature([Job])
    ],
    providers: [JobsResolver, JobsService],
    exports: [JobsService],
})

export class JobsModule {}