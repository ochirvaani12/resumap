import { Field, ID, InputType } from "@nestjs/graphql";
import { IsAlpha, IsEmail } from 'class-validator';

@InputType()
export class CreateRecruiterInput {
    @Field({nullable: true})
    @IsAlpha()
    firstName?: string;

    @Field({nullable: true})
    @IsAlpha()
    lastName?: string;

    @Field({nullable: true})
    @IsEmail()
    email?: string;

    @Field({nullable: true})
    avatar?: string;

    @Field({nullable: true})
    phone?: string;

    @Field({nullable: true})
    location?: string;

    @Field(() => ID, {nullable: true})
    createdById?: string;
}