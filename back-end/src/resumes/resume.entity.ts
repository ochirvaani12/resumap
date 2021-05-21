import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Resume {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @Column()
    @Field(() => ID, {nullable: true})
    candidateId?: string

    @Field(() => Candidates, {nullable: true})
    candidate?: Candidates

    @Column()
    @Field({nullable: true})
    title?: string

    @Column()
    @Field({nullable: true})
    resumeText?: string

    @Column()
    @Field({nullable: true})
    resume?: string

    @Column()
    @Field({nullable: true})
    permission: string

    @Column()
    @Field({nullable: true})
    uploadedDate?: string
}