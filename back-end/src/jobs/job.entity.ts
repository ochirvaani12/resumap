import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Companies } from "src/companies/company.entity";
import { Recruiter } from "src/recruiters/recruiter.entity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Job {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @Column()
    @Field(() => ID, {nullable: true})
    recruiterId?: string

    @Field(() => Recruiter, {nullable: true})
    recruiter?: Recruiter

    @Column()
    @Field(() => ID, {nullable: true})
    companyId?: string

    @Field(() => Companies, {nullable: true})
    company?: Companies

    @Column()
    @Field({nullable: true})
    jobTitle?: string

    @Column()
    @Field({nullable: true})
    location?: string

    @Column()
    @Field({nullable: true})
    industry?: string

    @Column()
    @Field({nullable: true})
    jobDescription?: string

    @Column()
    @Field({nullable: true})
    qualification?: string

    @Column()
    @Field({nullable: true})
    requirements?: string

    @Column()
    @Field({nullable: true})
    postDate?: string
}