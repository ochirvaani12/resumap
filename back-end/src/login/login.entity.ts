import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity()
export class Login {
    @PrimaryColumn()
    @Field()
    id: string

    @Column({unique: true})
    @Field()
    email: string

    @Column()
    password: string

    @Field()
    token: string
}