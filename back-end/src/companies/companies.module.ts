import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecruitersModule } from "src/recruiters/recruiters.module";
import { CompaniesResolver } from "./companies.resolver";
import { CompaniesService } from "./companies.service";
import { Companies } from "./company.entity";

@Module({
    imports: [
        RecruitersModule,
        TypeOrmModule.forFeature([Companies])
    ],
    providers: [CompaniesResolver, CompaniesService],
    exports: [CompaniesService]
})

export class CompaniesModule {}