import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesModule } from "src/candidates/candidates.module";
import { Resume } from "./resume.entity";
import { ResumesResolver } from "./resumes.resolver";
import { ResumesService } from "./resumes.service";

@Module({
    imports: [
        CandidatesModule,
        TypeOrmModule.forFeature([Resume]),
    ],
    providers: [ResumesResolver, ResumesService],
    exports: [ResumesService]
})

export class ResumesModule {}