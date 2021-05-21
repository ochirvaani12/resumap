import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Recruiter } from "src/recruiters/recruiter.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Companies {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @Column()
    @Field(() => ID)
    recruiterId: string

    @Column()
    @Field({nullable: true})
    name?: string

    @Column()
    @Field({nullable: true})
    logo?: string

    @Column()
    @Field({nullable: true})
    about?: string

    @Field(() => Recruiter, {nullable: true})
    recruiter: Recruiter
}