import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CandidateStatus } from "./candidateStatus.entity";
import { CreateCandidateStatusInput } from "./dto/create.candidateStatus.input";
import { UpdateCandidateStatusInput } from "./dto/update.candidateStatus.input";

@Injectable()
export class CandidateStatusService {
    constructor(
        @InjectRepository(CandidateStatus) private candidateStatusRepository: Repository<CandidateStatus>,
    ) {}

    async getCandidateStatuses(): Promise<CandidateStatus[]> {
        return await this.candidateStatusRepository.find({});
    }

    async getCandidateStatus(id: string): Promise<CandidateStatus> {
        return await this.candidateStatusRepository.findOneOrFail({id: id});
    }

    async createCandidateStatus(createCandidateStatusInput: CreateCandidateStatusInput): Promise<CandidateStatus> {
        return await this.candidateStatusRepository.save(createCandidateStatusInput);
    }
    
    async deleteCandidateStatus(id: string): Promise<CandidateStatus> {
        const candidateStatus = await this.candidateStatusRepository.findOneOrFail({id: id});
        this.candidateStatusRepository.remove(candidateStatus);
        return candidateStatus;
    }

    async updateCandidateStatus(updateCandidateStatusInput: UpdateCandidateStatusInput): Promise<CandidateStatus> {
        if(await this.candidateStatusRepository.findOneOrFail({id: updateCandidateStatusInput.id})) {
            const updatedCandidateStatus = this.candidateStatusRepository.create(updateCandidateStatusInput);
            return await this.candidateStatusRepository.save(updatedCandidateStatus);
        }
    }
}