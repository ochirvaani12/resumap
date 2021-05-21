import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class SocialLinks {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @Column()
    @Field(() => ID, {nullable: true})
    candidateId?: string

    @Field(() => Candidates, {nullable: true})
    candidate?: string

    @Column()
    @Field({nullable: true})
    title?: string

    @Column()
    @Field({nullable: true})
    link?: string
}