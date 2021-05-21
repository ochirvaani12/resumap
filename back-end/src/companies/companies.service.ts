import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Companies } from "./company.entity";
import { CreateCompanyInput } from "./dto/create.company.input";
import { UpdateCompanyInput } from "./dto/update.company.input";

@Injectable()
export class CompaniesService {
    constructor(
        @InjectRepository(Companies) private companiesRepository: Repository<Companies>,
    ) {}

    // QUERIES
    async getCompanies(): Promise<Companies[]> {
        return await this.companiesRepository.find({});
    }

    async getCompany(id: string): Promise<Companies> {
        return await this.companiesRepository.findOne({id: id});
    }

    // MUTATIONS
    async createCompany(company: CreateCompanyInput): Promise<Companies> {
        return await this.companiesRepository.save(company);
    }

    async deleteCompany(id: string): Promise<Companies> {
        const company = await this.companiesRepository.findOneOrFail({id: id});
        this.companiesRepository.remove(company);
        return company;
    }

    async updateCompany(company: UpdateCompanyInput): Promise<Companies> {
        if(await this.companiesRepository.findOneOrFail({id: company.id})){
            const updatedCompany = this.companiesRepository.create(company);
            return await this.companiesRepository.save(updatedCompany);
        }
    }
}