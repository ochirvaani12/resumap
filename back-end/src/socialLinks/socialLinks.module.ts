import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesModule } from "src/candidates/candidates.module";
import { SocialLinks } from "./socialLink.entity";
import { SocialLinksResolver } from "./socialLinks.resolver";
import { SocialLinksService } from "./socialLinks.service";

@Module({
    imports: [
        CandidatesModule,
        TypeOrmModule.forFeature([SocialLinks])
    ],
    providers: [SocialLinksResolver, SocialLinksService],
    exports: [],
})

export class SocialLinksModule {}