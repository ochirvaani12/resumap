import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CandidateNotes } from "./candidateNote.entity";
import { CreateCandidateNoteInput } from "./dto/create.candidateNote.input";
import { UpdateCandidateNoteInput } from "./dto/update.candidateNote.input";


@Injectable()
export class CandidateNotesServices {
    constructor(
        @InjectRepository(CandidateNotes) private candidateNotesRepository: Repository<CandidateNotes>,
    ) {}

    async getCandidateNotes(): Promise<CandidateNotes[]> {
        return await this.candidateNotesRepository.find({});
    }

    async getCandidateNote(id: string): Promise<CandidateNotes> {
        return await this.candidateNotesRepository.findOneOrFail({id: id});
    }

    async createCandidateNote(createCandidateNoteInput: CreateCandidateNoteInput): Promise<CandidateNotes> {
        return await this.candidateNotesRepository.save(createCandidateNoteInput);
    }

    async deleteCandidateNote(id: string): Promise<CandidateNotes> {
        const candidateNote = await this.candidateNotesRepository.findOneOrFail({id: id});
        this.candidateNotesRepository.remove(candidateNote);
        return candidateNote;
    }

    async updateCandidateNote(updateCandidateNoteInput: UpdateCandidateNoteInput): Promise<CandidateNotes> {
        if(await this.candidateNotesRepository.findOneOrFail({id: updateCandidateNoteInput.id})) {
            const updatedCandidateNote = this.candidateNotesRepository.create(updateCandidateNoteInput);
            return await this.candidateNotesRepository.save(updatedCandidateNote);
        }
    }
}