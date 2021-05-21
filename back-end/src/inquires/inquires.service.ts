import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateInquireInput } from "./dto/create.inquire.input";
import { UpdateInquireInput } from "./dto/update.inquire.input";
import { Inquire } from "./inquire.entity";

@Injectable()
export class InquiresService {
    constructor(
        @InjectRepository(Inquire) private inquiresRepository: Repository<Inquire>,
    ) {}

    async getInquires(): Promise<Inquire[]> {
        return await this.inquiresRepository.find({});
    }

    async getInquire(id: string): Promise<Inquire> {
        return await this.inquiresRepository.findOneOrFail({id: id});
    }

    async createInquire(createInquireInput: CreateInquireInput): Promise<Inquire> {
        return await this.inquiresRepository.save(createInquireInput);
    }

    async deleteInquire(id: string): Promise<Inquire> {
        const inquire = await this.inquiresRepository.findOneOrFail({id: id});
        this.inquiresRepository.remove(inquire);
        return inquire;
    }

    async updateInquire(updateInquireInput: UpdateInquireInput): Promise<Inquire> {
        if(await this.inquiresRepository.findOneOrFail({id: updateInquireInput.id})){
            const updatedInquire = this.inquiresRepository.create(updateInquireInput);
            return await this.inquiresRepository.save(updatedInquire);
        }
    }
}