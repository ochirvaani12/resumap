import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Candidates } from "src/candidates/candidate.entity";
import { Recruiter } from "src/recruiters/recruiter.entity";
import { Repository } from "typeorm";
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        @InjectRepository(Recruiter) private recruitersRepository: Repository<Recruiter>,
        @InjectRepository(Candidates) private candidatesRepository: Repository<Candidates>
    ) {}

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    async comparePassword(newPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(newPassword, hashedPassword);
    }

    async generateJWT(id: string): Promise<string> {
        const isCandidate = await this.findCandidate(id);
        if(isCandidate) {
            const token = this.jwtService.sign({
                id: isCandidate.id,
                firstName: isCandidate.firstName,
                lastName: isCandidate.lastName,
                avatar: isCandidate.avatar,
                phone: isCandidate.phone,
                location: isCandidate.location,
                education: isCandidate.education
            })
            return token;
        }
        else {
            const recruiter = await this.findRecruiter(id);
            const token = this.jwtService.sign({
                id: recruiter.id,
                firstName: recruiter.firstName,
                lastName: recruiter.lastName,
                avatar: recruiter.avatar,
                phone: recruiter.phone,
                location: recruiter.location,
                createdById: recruiter.createdById
            })
            return token;
        }
    }

    async findRecruiter(id: string): Promise<Recruiter> {
        return await this.recruitersRepository.findOne({id:id});
    }

    async findCandidate(id: string): Promise<Candidates> {
        return await this.candidatesRepository.findOne({id:id})
    }
}