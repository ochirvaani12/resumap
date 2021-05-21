import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Role {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @Column()
    @Field()
    name: string
}