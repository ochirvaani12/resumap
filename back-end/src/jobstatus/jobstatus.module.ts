import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JobsModule } from "src/jobs/jobs.module";
import { Jobstatus } from "./jobstatus.entity";
import { JobstatusResolver } from "./jobstatus.resolver";
import { JobstatusService } from "./jobstatus.service";

@Module({
    imports: [
        JobsModule,
        TypeOrmModule.forFeature([Jobstatus]),
    ],
    providers: [JobstatusResolver, JobstatusService],
    exports: [],
})

export class JobstatusModule {}