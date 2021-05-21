import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class NotificationSetting {
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
    email?: boolean

    @Column()
    @Field({nullable: true})
    status?: boolean

    @Column()
    @Field({nullable: true})
    opportunities?: boolean

    @Column()
    @Field({nullable: true})
    resume?: boolean
}