import { Field, ID, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export class RegisterInput {
    @Field(() => ID)
    id: string

    @Field()
    @IsEmail()
    email: string

    @Field()
    @IsNotEmpty()
    password: string
}