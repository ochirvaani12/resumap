import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { Job } from "src/jobs/job.entity";
import { Resume } from "src/resumes/resume.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class JobCandidate {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @Column()
    @Field(() => ID, {nullable: true})
    jobId?: string

    @Field(() => Job,{nullable: true})
    job?: Job

    @Column()
    @Field(() => ID, {nullable: true})
    candidateId?: string

    @Field(() => Candidates, {nullable: true})
    candidate: Candidates

    @Column()
    @Field(() => ID, {nullable: true})
    resumeId?: string

    @Field(() => Resume, {nullable: true})
    resume: Resume

    @Column()
    @Field({nullable: true})
    appliedOn?: string

    @Column()
    @Field({nullable: true})
    autoDelete?: boolean
}