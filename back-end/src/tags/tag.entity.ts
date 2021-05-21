import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Job } from "src/jobs/job.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Tags {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @Column()
    @Field(() => ID)
    jobId: string

    @Field(() => Job, {nullable: true})
    job?: Job

    @Column()
    @Field({nullable: true})
    tag?: string
}