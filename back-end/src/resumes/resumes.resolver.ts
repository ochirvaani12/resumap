import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { CandidatesService } from "src/candidates/candidates.service";
import { CreateResumeInput } from "./dto/create.resume.input";
import { UpdateResumeInput } from "./dto/update.resume.input";
import { Resume } from "./resume.entity";
import { ResumesService } from "./resumes.service";

@Resolver(() => Resume)
export class ResumesResolver {
    constructor(
        private readonly resumesService: ResumesService,
        private readonly candidatesService: CandidatesService,
    ) {}

    // QUERIES
    @Query(() => [Resume])
    async getResumes() {
        return await this.resumesService.getResumes();
    }

    @Query(() => Resume)
    async getResume(@Args('id') id: string) {
        return await this.resumesService.getResume(id);
    }

    // RESOLVERFIELD
    @ResolveField(() => Candidates)
    async candidate(@Parent() resume: Resume) {
        return await this.candidatesService.getCandidate(resume.candidateId);
    }

    // MUTATIONS
    @Mutation(() => Resume)
    async createResume(@Args('createResumeInput') createResumaInput: CreateResumeInput) {
        return await this.resumesService.createResume(createResumaInput);
    }

    @Mutation(() => Resume)
    async deleteResume(@Args('id') id: string) {
        return await this.resumesService.deleteResume(id);
    }

    @Mutation(() => Resume)
    async updateResume(@Args('updateResumeInput') updateResumeInput: UpdateResumeInput) {
        return await this.resumesService.updateResume(updateResumeInput);
    }
}