import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Job } from "src/jobs/job.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Jobstatus {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string
    
    @Column()
    @Field({nullable: true})
    status?: string

    @Column()
    @Field(() => ID, {nullable: true})
    jobId?: string

    @Field(() => Job, {nullable: true})
    job?: Job
}