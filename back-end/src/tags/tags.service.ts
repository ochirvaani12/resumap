import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTagInput } from "./dto/create.tag.input";
import { UpdateTagInput } from "./dto/update.tag.input";
import { Tags } from "./tag.entity";

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tags) private tagsRepository: Repository<Tags>,
    ) {}

    async getTags(): Promise<Tags[]> {
        return await this.tagsRepository.find({});
    }

    async getTag(id: string): Promise<Tags> {
        return await this.tagsRepository.findOneOrFail({id: id});
    }

    async createTag(createTagInput: CreateTagInput): Promise<Tags> {
        return await this.tagsRepository.save(createTagInput);
    }

    async deleteTag(id: string): Promise<Tags> {
        const tag = await this.tagsRepository.findOneOrFail(id);
        this.tagsRepository.remove(tag);
        return tag;
    }

    async updateTag(updateTagInput: UpdateTagInput): Promise<Tags> {
        if(await this.tagsRepository.findOneOrFail({id: updateTagInput.id})){
            const updatedTag = this.tagsRepository.create(updateTagInput);
            return await this.tagsRepository.save(updatedTag);
        }
    }
}