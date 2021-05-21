import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CandidateTags } from "./candidateTag.entity";
import { CreateCandidateTagInput } from "./dto/create.candidateTag.input";
import { UpdateCandidateTagInput } from "./dto/update.candidateTag.input";

@Injectable()
export class CandidateTagsService {
    constructor(
        @InjectRepository(CandidateTags) private candidateTagsRepository: Repository<CandidateTags>,
    ) {}

    async getCandidateTags(): Promise<CandidateTags[]> {
        return await this.candidateTagsRepository.find({});
    }

    async getCandidateTag(id: string): Promise<CandidateTags> {
        return await this.candidateTagsRepository.findOneOrFail({id: id});
    }

    async createCandidateTag(createCandidateTagInput: CreateCandidateTagInput): Promise<CandidateTags> {
        return await this.candidateTagsRepository.save(createCandidateTagInput);
    }

    async deleteCandidateTag(id: string): Promise<CandidateTags> {
        const candidateTag = await this.candidateTagsRepository.findOneOrFail({id: id});
        this.candidateTagsRepository.remove(candidateTag);
        return candidateTag;
    }

    async updateCandidateTag(updateCandidateTagInput: UpdateCandidateTagInput): Promise<CandidateTags> {
        if(await this.candidateTagsRepository.findOneOrFail({id: updateCandidateTagInput.id})) {
            const updatedCandidateTag =this.candidateTagsRepository.create(updateCandidateTagInput);
            return await this.candidateTagsRepository.save(updatedCandidateTag)
        }
    }
}