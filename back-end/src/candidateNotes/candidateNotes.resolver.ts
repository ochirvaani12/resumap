import { Resolver, Query, Args, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { CandidatesService } from "src/candidates/candidates.service";
import { Job } from "src/jobs/job.entity";
import { JobsService } from "src/jobs/jobs.service";
import { CandidateNotes } from "./candidateNote.entity";
import { CandidateNotesServices } from "./candidateNotes.service";
import { CreateCandidateNoteInput } from "./dto/create.candidateNote.input";
import { UpdateCandidateNoteInput } from "./dto/update.candidateNote.input";

@Resolver(() => CandidateNotes)
export class CandidateNotesResolver {
    constructor(
        private readonly candidateNotesService: CandidateNotesServices,
        private readonly jobsService: JobsService,
        private readonly candidatesService: CandidatesService,
    ) {}

    // QUERIES
    @Query(() => [CandidateNotes])
    async getCandidateNotes() {
        return await this.candidateNotesService.getCandidateNotes();
    }

    @Query(() => CandidateNotes)
    async getCandidateNote(@Args('id') id: string) {
        return await this.candidateNotesService.getCandidateNote(id);
    }

    // RESOLVEFIELD
    @ResolveField(() => Job)
    async job(@Parent() candidateNote: CandidateNotes) {
        return await this.jobsService.getJob(candidateNote.jobId);
    }

    @ResolveField(() => Candidates)
    async candidate(@Parent() candidateNote: CandidateNotes) {
        return await this.candidatesService.getCandidate(candidateNote.candidateId);
    }

    // MUTATIONS
    @Mutation(() => CandidateNotes)
    async createCandidateNote(@Args('createCandidateNoteInput') createCandidateNoteInput: CreateCandidateNoteInput) {
        return await this.candidateNotesService.createCandidateNote(createCandidateNoteInput);
    }

    @Mutation(() => CandidateNotes)
    async deleteCandidateNote(@Args('id') id: string) {
        return await this.candidateNotesService.deleteCandidateNote(id);
    }

    @Mutation(() => CandidateNotes)
    async updateCandidateNote(@Args('updateCandidateNoteInput') updateCandidateNoteInput: UpdateCandidateNoteInput) {
        return await this.candidateNotesService.updateCandidateNote(updateCandidateNoteInput);
    }
}