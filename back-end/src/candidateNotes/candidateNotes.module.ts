import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesModule } from "src/candidates/candidates.module";
import { JobsModule } from "src/jobs/jobs.module";
import { CandidateNotes } from "./candidateNote.entity";
import { CandidateNotesResolver } from "./candidateNotes.resolver";
import { CandidateNotesServices } from "./candidateNotes.service";

@Module({
    imports: [
        JobsModule,
        CandidatesModule,
        TypeOrmModule.forFeature([CandidateNotes])
    ],
    providers: [CandidateNotesResolver, CandidateNotesServices],
    exports: [],
})

export class CandidateNotesModule {}