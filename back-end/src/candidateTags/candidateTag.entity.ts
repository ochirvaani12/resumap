import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { Job } from "src/jobs/job.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class CandidateTags {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @Column()
    @Field(() => ID)
    candidateId: string

    @Field(() => Candidates, {nullable: true})
    candidate?: Candidates

    @Column()
    @Field(() => ID)
    jobId: string

    @Field(() => Job, {nullable: true})
    job?: Job

    @Column()
    @Field({nullable: true})
    tag?: string
}