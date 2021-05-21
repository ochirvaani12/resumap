import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Job } from "src/jobs/job.entity";
import { JobsService } from "src/jobs/jobs.service";
import { CreateInquireInput } from "./dto/create.inquire.input";
import { UpdateInquireInput } from "./dto/update.inquire.input";
import { Inquire } from "./inquire.entity";
import { InquiresService } from "./inquires.service";

@Resolver(() => Inquire)
export class InquiresResolver {
    constructor(
        private readonly inquiresService: InquiresService,
        private readonly jobsService: JobsService,
    ) {}

    // QUERIES
    @Query(() => [Inquire])
    async getInquires() {
        return await this.inquiresService.getInquires();
    }

    @Query(() => Inquire)
    async getInquire(@Args('id') id: string) {
        return await this.inquiresService.getInquire(id);
    }

    // RESOLVEFIELD
    @ResolveField(() => Job)
    async job(@Parent() inquire: Inquire) {
        return await this.jobsService.getJob(inquire.jobId);
    }

    // MUTATIONS
    @Mutation(() => Inquire)
    async createInquire(@Args('createInquireInput') createInquireInput: CreateInquireInput) {
        return await this.inquiresService.createInquire(createInquireInput);
    }

    @Mutation(() => Inquire)
    async deleteInquire(@Args('id') id: string) {
        return await this.inquiresService.deleteInquire(id);
    }

    @Mutation(() => Inquire)
    async updateInquire(@Args('updateInquireInput') updateInquireInput: UpdateInquireInput) {
        return await this.inquiresService.updateInquire(updateInquireInput);
    }

}