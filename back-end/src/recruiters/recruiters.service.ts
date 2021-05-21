import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LoginService } from "src/login/login.service";
import { Repository } from "typeorm";
import { CreateRecruiterInput } from "./dto/create.recruiter.input";
import { UpdateRecruiterInput } from "./dto/update.recruiter.input";
import { Recruiter } from "./recruiter.entity";

@Injectable()
export class RecruitersService {
    constructor( 
        @InjectRepository(Recruiter) private recruiterRepository: Repository<Recruiter>,
        private readonly loginService: LoginService,
    ) {}

    // QUERIES
    async getRecruiters(): Promise<Recruiter[]> {
        return await this.recruiterRepository.find({});
    }

    async getRecruiter(id: string): Promise<Recruiter> {
        return await this.recruiterRepository.findOneOrFail({id: id});
    }

    // MUTATIONS
    async createRecruiter(recruiter: CreateRecruiterInput): Promise<Recruiter> {
        return await this.recruiterRepository.save(recruiter);
    }

    async deleteRecruiter(id: string): Promise<Recruiter> {
        const recruiter = await this.recruiterRepository.findOneOrFail({id: id});
        await this.loginService.deleteLoginData(recruiter.id)
        this.recruiterRepository.remove(recruiter);
        return recruiter;
    }

    async updateRecruiter(recruiter: UpdateRecruiterInput): Promise<Recruiter> {
        if(await this.recruiterRepository.findOneOrFail({id: recruiter.id})){
            const updatedRecruiter = this.recruiterRepository.create(recruiter);
            return await this.recruiterRepository.save(updatedRecruiter);
        }
    }
}