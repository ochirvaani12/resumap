import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { CompaniesService } from "src/companies/companies.service";
import { Companies } from "src/companies/company.entity";
import { Recruiter } from "src/recruiters/recruiter.entity";
import { RecruitersService } from "src/recruiters/recruiters.service";
import { CreateJobInput } from "./dto/create.job.input";
import { UpdateJobInput } from "./dto/update.job.input";
import { Job } from "./job.entity";
import { JobsService } from "./jobs.service";

@Resolver(() => Job)
export class JobsResolver {
    constructor(
        private readonly jobsService: JobsService,
        private readonly recruitersService: RecruitersService,
        private readonly companiesService: CompaniesService,
    ) {}

    // QUERIES
    @Query(() => [Job])
    async getJobs() {
        return await this.jobsService.getJobs();
    }

    @Query(() => Job)
    async getJob(@Args('id') id: string) {
        return await this.jobsService.getJob(id);
    }

    // RESOLVEFIELD
    @ResolveField(() => Recruiter)
    async recruiter(@Parent() job: Job) {
        return await this.recruitersService.getRecruiter(job.recruiterId);
    }

    @ResolveField(() => Companies)
    async company(@Parent() job: Job) {
        return await this.companiesService.getCompany(job.companyId);
    }

    // MUTATIONS
    @Mutation(() => Job)
    async createJob(@Args('createJobInput') createJobInput: CreateJobInput) {
        return await this.jobsService.createJob(createJobInput);
    }

    @Mutation(() => Job)
    async deleteJob(@Args('id') id: string) {
        return await this.jobsService.deleteJob(id);
    }

    @Mutation(() => Job)
    async updateJob(@Args('updateJobInput') updateJobInput: UpdateJobInput) {
        return await this.jobsService.updateJob(updateJobInput);
    }
}