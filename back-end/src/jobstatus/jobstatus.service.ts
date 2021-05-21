import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateJobstatusInput } from "./dto/create.jobstatus.input";
import { UpdateJobstatusInput } from "./dto/update.jobstatus.input";
import { Jobstatus } from "./jobstatus.entity";

@Injectable()
export class JobstatusService {
    constructor(
        @InjectRepository(Jobstatus) private jobstatusRepository: Repository<Jobstatus>,
    ) {}

    async getJobstatuses(): Promise<Jobstatus[]> {
        return await this.jobstatusRepository.find({});
    }

    async getJobstatus(id: string): Promise<Jobstatus> {
        return await this.jobstatusRepository.findOneOrFail({id: id});
    }

    async createJobstatus(createJobstatusInput: CreateJobstatusInput): Promise<Jobstatus> {
        return await this.jobstatusRepository.save(createJobstatusInput);
    }

    async deleteJobstatus(id: string): Promise<Jobstatus> {
        const jobstatus = await this.jobstatusRepository.findOneOrFail({id: id});
        this.jobstatusRepository.remove(jobstatus);
        return jobstatus;
    }

    async updateJobstatus(updateJobstatusInput: UpdateJobstatusInput): Promise<Jobstatus> {
        if(await this.jobstatusRepository.findOneOrFail({id: updateJobstatusInput.id})) {
            const updatedJobstatus = this.jobstatusRepository.create(updateJobstatusInput);
            return await this.jobstatusRepository.save(updatedJobstatus);
        }
    }
}