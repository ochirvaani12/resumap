import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Login } from "src/login/login.entity";
import { Role } from "src/roles/role.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class LoginRole {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @Column()
    @Field(() => ID)
    roleId: string

    @Field(() => Role, {nullable: true})
    role?: Role

    @Column()
    @Field(() => ID)
    loginId: string

    @Field(() => Login, {nullable: true})
    login?: Login
}