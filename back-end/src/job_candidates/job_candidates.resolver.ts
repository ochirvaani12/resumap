import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { CandidatesService } from "src/candidates/candidates.service";
import { Job } from "src/jobs/job.entity";
import { JobsService } from "src/jobs/jobs.service";
import { Resume } from "src/resumes/resume.entity";
import { ResumesService } from "src/resumes/resumes.service";
import { CreateJobCandidateInput } from "./dto/create.job_candidate.input";
import { UpdateJobCandidateInput } from "./dto/update.job_candidate.input";
import { JobCandidate } from "./job_candidate.entity";
import { JobCandidatesService } from "./job_candidates.service";

@Resolver(() => JobCandidate)
export class JobCandidatesResolver {
    constructor(
        private readonly jobCandidateService: JobCandidatesService,
        private readonly jobsService: JobsService,
        private readonly candidatesService: CandidatesService,
        private readonly resumesService: ResumesService,
    ) {}

    // QUERIES
    @Query(() => [JobCandidate])
    async getJobCandidates() {
        return await this.jobCandidateService.getJobCandidates();
    }

    @Query(() => JobCandidate)
    async getJobCandidate(@Args('id') id: string) {
        return await this.jobCandidateService.getJobCandidate(id);
    }

    // RESOLVEFIELD
    @ResolveField(() => Job)
    async job(@Parent() jobCandidate: JobCandidate) {
        return await this.jobsService.getJob(jobCandidate.jobId);
    }

    @ResolveField(() => Candidates)
    async candidate(@Parent() jobCandidate: JobCandidate) {
        return await this.candidatesService.getCandidate(jobCandidate.candidateId);
    }

    @ResolveField(() => Resume)
    async resume(@Parent() jobCandidate: JobCandidate) {
        return await this.resumesService.getResume(jobCandidate.resumeId);
    }

    // MUTATIONS
    @Mutation(() => JobCandidate)
    async createJobCandidate(@Args('createJobCandidateInput') createJobCandidateInput: CreateJobCandidateInput) {
        return await this.jobCandidateService.createJobCandidate(createJobCandidateInput);
    }

    @Mutation(() => JobCandidate)
    async deleteJobCandidate(@Args('id') id: string) {
        return await this.jobCandidateService.deleteJobCandidate(id);
    }

    @Mutation(() => JobCandidate)
    async updateJobCandidate(@Args('updateJobCandidateInput') updateJobCandidateInput: UpdateJobCandidateInput) {
        return await this.jobCandidateService.updateJobCandidate(updateJobCandidateInput);
    }
}