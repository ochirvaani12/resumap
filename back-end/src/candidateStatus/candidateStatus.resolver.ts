import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { CandidatesService } from "src/candidates/candidates.service";
import { Job } from "src/jobs/job.entity";
import { JobsService } from "src/jobs/jobs.service";
import { CandidateStatus } from "./candidateStatus.entity";
import { CandidateStatusService } from "./candidateStatus.service";
import { CreateCandidateStatusInput } from "./dto/create.candidateStatus.input";
import { UpdateCandidateStatusInput } from "./dto/update.candidateStatus.input";

@Resolver(() => CandidateStatus)
export class CandidateStatusResolver {
    constructor(
        private readonly candidateStatusService: CandidateStatusService,
        private readonly candidatesService: CandidatesService,
        private readonly jobsService: JobsService,
    ) {}

    // QUERIES
    @Query(() => [CandidateStatus])
    async getCandidateStatuses() {
        return await this.candidateStatusService.getCandidateStatuses();
    }

    @Query(() => CandidateStatus)
    async getCandidateStatus(@Args('id') id: string) {
        return await this.candidateStatusService.getCandidateStatus(id);
    }

    // RESOLVEFIELD
    @ResolveField(() => Candidates)
    async candidate(@Parent() candidateStatus: CandidateStatus) {
        return await this.candidatesService.getCandidate(candidateStatus.candidateId);
    }

    @ResolveField(() => Job)
    async job(@Parent() candidateStatus: CandidateStatus) {
        return await this.jobsService.getJob(candidateStatus.jobId);
    }

    // MUTATIONS
    @Mutation(() => CandidateStatus)
    async createCandidateStatus(@Args('createCandidateStatusInput') createCandidateStatusInput: CreateCandidateStatusInput) {
        return await this.candidateStatusService.createCandidateStatus(createCandidateStatusInput);
    }

    @Mutation(() => CandidateStatus)
    async deleteCandidateStatus(@Args('id') id: string) {
        return await this.candidateStatusService.deleteCandidateStatus(id);
    }

    @Mutation(() => CandidateStatus)
    async updateCandidateStatus(@Args('updateCandidateStatusInput') updateCandidateStatusInput: UpdateCandidateStatusInput) {
        return await this.candidateStatusService.updateCandidateStatus(updateCandidateStatusInput);
    }

}