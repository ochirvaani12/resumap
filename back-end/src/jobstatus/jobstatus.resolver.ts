import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Job } from "src/jobs/job.entity";
import { JobsService } from "src/jobs/jobs.service";
import { CreateJobstatusInput } from "./dto/create.jobstatus.input";
import { UpdateJobstatusInput } from "./dto/update.jobstatus.input";
import { Jobstatus } from "./jobstatus.entity";
import { JobstatusService } from "./jobstatus.service";

@Resolver(() => Jobstatus)
export class JobstatusResolver {
    constructor(
        private readonly jobstatusService: JobstatusService,
        private readonly jobsService: JobsService,
    ) {}

    // QUERIES
    @Query(() => [Jobstatus])
    async getJobstatuses() {
        return await this.jobstatusService.getJobstatuses();
    }

    @Query(() => Jobstatus)
    async getJobstatus(@Args('id') id: string) {
        return await this.jobstatusService.getJobstatus(id);
    }

    // RESOLVEFIELD
    @ResolveField(() => Job)
    async job(@Parent() jobstatus: Jobstatus) {
        return await this.jobsService.getJob(jobstatus.jobId)
    }

    // MUTAtIONS
    @Mutation(() => Jobstatus)
    async createJobstatus(@Args('createJobstatusInput') createJobstatusInput: CreateJobstatusInput) {
        return await this.jobstatusService.createJobstatus(createJobstatusInput);
    }

    @Mutation(() => Jobstatus)
    async deleteJobstatus(@Args('id') id: string) {
        return await this.jobstatusService.deleteJobstatus(id);
    }

    @Mutation(() => Jobstatus)
    async updateJobstatus(@Args('updateJobstatusInput') updateJobstatusInput: UpdateJobstatusInput) {
        return await this.jobstatusService.updateJobstatus(updateJobstatusInput);
    }
}