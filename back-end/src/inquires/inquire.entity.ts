import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Job } from "src/jobs/job.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Inquire {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @Column()
    @Field(() => ID, {nullable: true})
    jobId?: string

    @Field(() => Job, {nullable: true})
    job: Job

    @Column()
    @Field({nullable: true})
    firstName?: string

    @Column()
    @Field({nullable: true})
    lastName?: string

    @Column()
    @Field({nullable: true})
    email?: string

    @Column()
    @Field({nullable: true})
    phone?: string

    @Column()
    @Field({nullable: true})
    location?: string
}