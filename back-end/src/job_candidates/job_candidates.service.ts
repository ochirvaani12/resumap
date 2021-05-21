import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateJobCandidateInput } from "./dto/create.job_candidate.input";
import { UpdateJobCandidateInput } from "./dto/update.job_candidate.input";
import { JobCandidate } from "./job_candidate.entity";

@Injectable()
export class JobCandidatesService {
    constructor(
        @InjectRepository(JobCandidate) private jobCandidateRepository: Repository<JobCandidate>,
    ) {}

    async getJobCandidates(): Promise<JobCandidate[]> {
        return await this.jobCandidateRepository.find({});
    }

    async getJobCandidate(id: string): Promise<JobCandidate> {
        return await this.jobCandidateRepository.findOneOrFail({id: id});
    }

    async createJobCandidate(createJobCandidateInput: CreateJobCandidateInput): Promise<JobCandidate> {
        return await this.jobCandidateRepository.save(createJobCandidateInput);
    }

    async deleteJobCandidate(id: string): Promise<JobCandidate> {
        const jobCandidate = await this.jobCandidateRepository.findOneOrFail({id: id});
        this.jobCandidateRepository.remove(jobCandidate);
        return jobCandidate;
    }

    async updateJobCandidate(updateJobCandidateInput: UpdateJobCandidateInput): Promise<JobCandidate> {
        if(await this.jobCandidateRepository.findOneOrFail({id: updateJobCandidateInput.id})){
            const updatedJobCandidate = this.jobCandidateRepository.create(updateJobCandidateInput);
            return await this.jobCandidateRepository.save(updatedJobCandidate);
        }
    }
}