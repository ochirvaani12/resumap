import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JobsModule } from "src/jobs/jobs.module";
import { Tags } from "./tag.entity";
import { TagsResolver } from "./tags.resolver";
import { TagsService } from "./tags.service";

@Module({
    imports: [
        JobsModule,
        TypeOrmModule.forFeature([Tags]),
    ],
    providers: [TagsResolver, TagsService],
    exports: []
})

export class TagsModule {}