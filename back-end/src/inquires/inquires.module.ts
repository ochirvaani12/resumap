import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JobsModule } from "src/jobs/jobs.module";
import { Inquire } from "./inquire.entity";
import { InquiresResolver } from "./inquires.resolver";
import { InquiresService } from "./inquires.service";

@Module({
    imports: [
        JobsModule,
        TypeOrmModule.forFeature([Inquire]),
    ],
    providers: [InquiresResolver, InquiresService],
    exports: []
})

export class InquiresModule {}