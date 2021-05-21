import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Login } from "src/login/login.entity";

@Entity()
@ObjectType()
export class Candidates {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string;

    @Column()
    @Field({nullable: true})
    firstName?: string;

    @Column()
    @Field({nullable: true})
    lastName?: string;

    @Column({unique: true})
    @Field({nullable: true})
    email?: string;

    @Column()
    @Field({nullable: true})
    avatar?: string;

    @Column()
    @Field({nullable: true})
    phone: string;

    @Column()
    @Field({nullable: true})
    location?: string;

    @Column()
    @Field({nullable: true})
    education?: string;

    @Field(() => Login, {nullable: true})
    login: Login
} 