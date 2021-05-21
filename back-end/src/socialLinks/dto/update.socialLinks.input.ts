import { Field, ID, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateSocialLinkInput {
    @Field(() => ID)
    id: string

    @Field(() => ID)
    @IsNotEmpty()
    candidateId: string

    @Field({nullable: true})
    title?: string

    @Field({nullable: true})
    link?: string
}