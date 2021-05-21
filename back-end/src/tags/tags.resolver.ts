import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Job } from "src/jobs/job.entity";
import { JobsService } from "src/jobs/jobs.service";
import { CreateTagInput } from "./dto/create.tag.input";
import { UpdateTagInput } from "./dto/update.tag.input";
import { Tags } from "./tag.entity";
import { TagsService } from "./tags.service";

@Resolver(() => Tags)
export class TagsResolver {
    constructor(
        private readonly tagsService: TagsService,
        private readonly jobsService: JobsService,
    ) {}

    // QUERIES
    @Query(() => [Tags])
    async getTags() {
        return await this.tagsService.getTags()
    }

    @Query(() => Tags)
    async getTag(@Args('id') id: string) {
        return await this.tagsService.getTag(id);
    }

    // RESOLVEFIELD
    @ResolveField(() => Job)
    async job(@Parent() tag: Tags) {
        return await this.jobsService.getJob(tag.jobId);
    }

    // MUTATIONS
    @Mutation(() => Tags)
    async createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
        return await this.tagsService.createTag(createTagInput);
    }

    @Mutation(() => Tags)
    async deleteTag(@Args('id') id: string) {
        return await this.tagsService.deleteTag(id);
    }

    @Mutation(() => Tags)
    async updateTag(@Args('updateTagInput') updateTagInput: UpdateTagInput) {
        return await this.tagsService.updateTag(updateTagInput);
    }
}