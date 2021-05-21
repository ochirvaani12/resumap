import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { CandidatesService } from "src/candidates/candidates.service";
import { CreateSocialLinkInput } from "./dto/create.socialLink.input";
import { UpdateSocialLinkInput } from "./dto/update.socialLinks.input";
import { SocialLinks } from "./socialLink.entity";
import { SocialLinksService } from "./socialLinks.service";

@Resolver(() => SocialLinks)
export class SocialLinksResolver {
    constructor(
        private readonly socialLinksService: SocialLinksService,
        private readonly candidatesService: CandidatesService,
    ) {}

    // QUERIES
    @Query(() => [SocialLinks])
    async getSocialLinks() {
        return await this.socialLinksService.getSocialLinks();
    }

    @Query(() => SocialLinks)
    async getSocialLink(@Args('id') id: string) {
        return await this.socialLinksService.getSocialLink(id);
    }

    // REsOLVEFIELD
    @ResolveField(() => Candidates)
    async candidate(@Parent() socialLink: SocialLinks) {
        return await this.candidatesService.getCandidate(socialLink.candidateId);
    }

    // MUTATIONS
    @Mutation(() => SocialLinks)
    async createSocialLink(@Args('createSocialLinkInput') createSocialLinkInput: CreateSocialLinkInput) {
        return await this.socialLinksService.createSocialLink(createSocialLinkInput);
    }

    @Mutation(() => SocialLinks)
    async deleteSocialLink(@Args('id') id: string) {
        return await this.socialLinksService.deleteSocialLink(id);
    }

    @Mutation(() => SocialLinks)
    async updateSocialLink(@Args('updateSocialLinkInput') updateSocialLinkInput: UpdateSocialLinkInput) {
        return await this.socialLinksService.updateSocialLink(updateSocialLinkInput);
    }

}