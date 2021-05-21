import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesModule } from "src/candidates/candidates.module";
import { JobsModule } from "src/jobs/jobs.module";
import { CandidateTags } from "./candidateTag.entity";
import { CandidateTagsResolver } from "./candidateTags.resolver";
import { CandidateTagsService } from "./candidateTags.service";

@Module({
    imports: [
        JobsModule,
        CandidatesModule,
        TypeOrmModule.forFeature([CandidateTags]),
    ],
    providers: [CandidateTagsResolver, CandidateTagsService],
    exports: [],
})

export class CandidateTagsModule {}