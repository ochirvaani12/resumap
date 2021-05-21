import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoginModule } from "src/login/login.module";
import { Candidates } from "./candidate.entity";
import { CandidatesResolver } from "./candidates.resolver";
import { CandidatesService } from "./candidates.service";

@Module({
    imports: [
        LoginModule,
        TypeOrmModule.forFeature([Candidates])
    ],
    providers: [CandidatesService, CandidatesResolver],
    exports: [CandidatesService,]
})
export class CandidatesModule {}