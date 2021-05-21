import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesModule } from "src/candidates/candidates.module";
import { JobsModule } from "src/jobs/jobs.module";
import { CandidateStatus } from "./candidateStatus.entity";
import { CandidateStatusResolver } from "./candidateStatus.resolver";
import { CandidateStatusService } from "./candidateStatus.service";

@Module({
    imports: [
        JobsModule,
        CandidatesModule,
        TypeOrmModule.forFeature([CandidateStatus])
    ],
    providers: [CandidateStatusResolver, CandidateStatusService],
    exports: [],
})

export class CandidateStatusModule {}