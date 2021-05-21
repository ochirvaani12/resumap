import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Login } from "src/login/login.entity";

@Entity()
@ObjectType()
export class Recruiter {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

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
    avatar?: string

    @Column()
    @Field({nullable: true})
    phone?: string

    @Column()
    @Field({nullable: true})
    location?: string

    @Column()
    @Field(() => ID, {nullable: true})
    createdById?: string

    @Field(() => Login, {nullable: true})
    login?: Login

    @Field(() => Recruiter, {nullable: true})
    createdBy?: Recruiter
}