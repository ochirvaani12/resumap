import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateResumeInput } from "./dto/create.resume.input";
import { UpdateResumeInput } from "./dto/update.resume.input";
import { Resume } from "./resume.entity";

@Injectable()
export class ResumesService {
    constructor(
        @InjectRepository(Resume) private resumesRepository: Repository<Resume>,
    ) {}

    // QUERIES
    async getResumes(): Promise<Resume[]> {
        return await this.resumesRepository.find({});
    }

    async getResume(id: string): Promise<Resume> {
        return await this.resumesRepository.findOneOrFail({id: id});
    }

    // MUTATION
    async createResume(createResumeInput: CreateResumeInput): Promise<Resume> {
        return await this.resumesRepository.save(createResumeInput);
    }

    async deleteResume(id: string): Promise<Resume> {
        const resume = await this.resumesRepository.findOneOrFail({id: id});
        this.resumesRepository.remove(resume);
        return resume;
    }

    async updateResume(updateResumeInput: UpdateResumeInput): Promise<Resume> {
        if(await this.resumesRepository.findOneOrFail({id: updateResumeInput.id})) {
            const updatedResume = this.resumesRepository.create(updateResumeInput);
            return await this.resumesRepository.save(updatedResume);
        }
    }

}