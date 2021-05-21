import { Field, ID, InputType } from "@nestjs/graphql";
import { IsAlpha, IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCandidateInput {
    @IsNotEmpty()
    @Field(() => ID)
    readonly id: string;

    @Field({nullable: true})
    @IsAlpha()
    readonly firstName: string;

    @Field({nullable: true})
    @IsAlpha()
    readonly lastName?: string;

    @Field({nullable: true})
    readonly avatar?: string;

    @IsEmail()
    @Field({nullable: true})
    readonly email?: string;

    @Field({nullable: true})
    readonly phone?: string;

    @Field({nullable: true})
    readonly location?: string;
    
    @Field({nullable: true})
    readonly education?: string;
}