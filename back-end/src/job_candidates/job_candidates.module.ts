import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesModule } from "src/candidates/candidates.module";
import { JobsModule } from "src/jobs/jobs.module";
import { ResumesModule } from "src/resumes/resumes.module";
import { JobCandidate } from "./job_candidate.entity";
import { JobCandidatesResolver } from "./job_candidates.resolver";
import { JobCandidatesService } from "./job_candidates.service";

@Module({
    imports: [
        JobsModule,
        CandidatesModule,
        ResumesModule,
        TypeOrmModule.forFeature([JobCandidate]),
    ],
    providers: [JobCandidatesResolver, JobCandidatesService],
    exports: [],
})

export class JobCandidatesModule {}