import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LoginService } from "src/login/login.service";
import { Repository } from "typeorm";
import { Candidates } from "./candidate.entity";
import { CreateCandidateInput } from "./dto/create.candidate.input";
import { UpdateCandidateInput } from "./dto/update.candidate.input";

@Injectable()
export class CandidatesService {
    constructor (
        @InjectRepository(Candidates) private candidatesRepository: Repository<Candidates>,
        private readonly loginService: LoginService,
    ) {}

    // QUERIES
    async getCandidates(): Promise<Candidates[]> {
        return await this.candidatesRepository.find({});
    }

    async getCandidate(id: string): Promise<Candidates> {
        return await this.candidatesRepository.findOneOrFail({id: id});
    }


    // MUTATION
    async createCandidate(candidate: CreateCandidateInput): Promise<Candidates> {
        return await this.candidatesRepository.save(candidate);
    }

    async deleteCandidate(id: string): Promise<Candidates> {
        const candidate = await this.candidatesRepository.findOneOrFail({id: id});
        await this.loginService.deleteLoginData(candidate.id)
        this.candidatesRepository.remove(candidate);
        return candidate; 
    }

    async updateCandidate(candidate: UpdateCandidateInput): Promise<Candidates> {
        if(this.candidatesRepository.findOneOrFail({id: candidate.id})){
            const updatedCandidate = this.candidatesRepository.create(candidate);
            return await this.candidatesRepository.save(updatedCandidate);
        }
    }
}