import { Field, ID, InputType } from "@nestjs/graphql";
import { IsAlpha, IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export class CreateInquireInput {
    @Field(() => ID)
    @IsNotEmpty()
    jobId: string

    @Field({nullable: true})
    @IsAlpha()
    firstName?: string

    @Field({nullable: true})
    @IsAlpha()
    lastName?: string

    @Field({nullable: true})
    @IsEmail()
    email?: string

    @Field({nullable: true})
    phone?: string

    @Field({nullable: true})
    location?: string
}