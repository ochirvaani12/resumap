import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CompaniesService } from "src/companies/companies.service";
import { Repository } from "typeorm";
import { CreateJobInput } from "./dto/create.job.input";
import { UpdateJobInput } from "./dto/update.job.input";
import { Job } from "./job.entity";

@Injectable()
export class JobsService {
    constructor(
        @InjectRepository(Job) private jobsRepository: Repository<Job>,
        private readonly companiesService: CompaniesService,
    ) {}

    // QUERIES
    async getJobs(): Promise<Job[]> {
        return await this.jobsRepository.find({});
    }

    async getJob(id: string): Promise<Job> {
        return await this.jobsRepository.findOneOrFail({id: id});
    }

    // MUTATION
    async createJob(createJobInput: CreateJobInput): Promise<Job> {
        if(createJobInput.company){
            await this.companiesService.createCompany(createJobInput.company);
        }
        return await this.jobsRepository.save(createJobInput);
    }

    async deleteJob(id: string): Promise<Job> {
        const job = await this.jobsRepository.findOneOrFail({id: id});
        this.jobsRepository.remove(job);
        return job;
    }

    async updateJob(updateJobInput: UpdateJobInput): Promise<Job> {
        if(await this.jobsRepository.findOneOrFail({id: updateJobInput.id})){
            const updatedJob = this.jobsRepository.create(updateJobInput);
            if(updatedJob.company){
                await this.companiesService.updateCompany(updatedJob.company);
            }
            delete updatedJob.company;
            return await this.jobsRepository.save(updatedJob);
        }
    }
}