import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSocialLinkInput } from "./dto/create.socialLink.input";
import { UpdateSocialLinkInput } from "./dto/update.socialLinks.input";
import { SocialLinks } from "./socialLink.entity";

@Injectable()
export class SocialLinksService {
    constructor(
        @InjectRepository(SocialLinks) private socialLinksRepository: Repository<SocialLinks>,
    ) {}

    async getSocialLinks(): Promise<SocialLinks[]> {
        return await this.socialLinksRepository.find({});
    }

    async getSocialLink(id: string): Promise<SocialLinks> {
        return await this.socialLinksRepository.findOneOrFail({id: id});
    }

    async createSocialLink(createSocialLinksInput: CreateSocialLinkInput): Promise<SocialLinks> {
        return await this.socialLinksRepository.save(createSocialLinksInput);
    }

    async deleteSocialLink(id: string): Promise<SocialLinks> {
        const socialLink = await this.socialLinksRepository.findOneOrFail({id: id});
        this.socialLinksRepository.remove(socialLink);
        return socialLink;
    }

    async updateSocialLink(updateSocialLinkInput: UpdateSocialLinkInput): Promise<SocialLinks> {
        if(await this.socialLinksRepository.findOneOrFail({id: updateSocialLinkInput.id})) {
            const updatedSocialLink = this.socialLinksRepository.create(updateSocialLinkInput);
            return await this.socialLinksRepository.save(updatedSocialLink);
        }
    }
}