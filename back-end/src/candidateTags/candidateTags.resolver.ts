import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { CandidatesService } from "src/candidates/candidates.service";
import { Job } from "src/jobs/job.entity";
import { JobsService } from "src/jobs/jobs.service";
import { CandidateTags } from "./candidateTag.entity";
import { CandidateTagsService } from "./candidateTags.service";
import { CreateCandidateTagInput } from "./dto/create.candidateTag.input";
import { UpdateCandidateTagInput } from "./dto/update.candidateTag.input";

@Resolver(() => CandidateTags)
export class CandidateTagsResolver {
    constructor(
        private readonly candidateTagsService: CandidateTagsService,
        private readonly jobsService: JobsService,
        private readonly candidatesService: CandidatesService,
    ) {}

    // QUERIES
    @Query(() => [CandidateTags])
    async getCandidateTags() {
        return await this.candidateTagsService.getCandidateTags();
    }

    @Query(() => CandidateTags)
    async getCandidateTag(@Args('id') id: string) {
        return await this.candidateTagsService.getCandidateTag(id);
    }

    // RESOLVEFIELD
    @ResolveField(() => Candidates)
    async candidate(@Parent() candidateTag: CandidateTags) {
        return await this.candidatesService.getCandidate(candidateTag.candidateId);
    }

    @ResolveField(() => Job)
    async job(@Parent() candidateTag: CandidateTags) {
        return await this.jobsService.getJob(candidateTag.jobId);
    }

    // MUTATIONS
    @Mutation(() => CandidateTags)
    async createCandidateTag(@Args('createCandidateTagInput') createCandidateTagInput: CreateCandidateTagInput) {
        return await this.candidateTagsService.createCandidateTag(createCandidateTagInput);
    }

    @Mutation(() => CandidateTags)
    async deleteCandidateTag(@Args('id') id: string) {
        return await this.candidateTagsService.deleteCandidateTag(id);
    }

    @Mutation(() => CandidateTags)
    async updateCandidateTag(@Args('updateCandidateTagInput') updateCandidateTagInput: UpdateCandidateTagInput) {
        return await this.candidateTagsService.updateCandidateTag(updateCandidateTagInput);
    }
}
