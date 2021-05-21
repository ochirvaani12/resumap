import { Field, ID, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateCandidateTagInput {
    @Field(() => ID)
    @IsNotEmpty()
    candidateId: string

    @Field(() => ID)
    @IsNotEmpty()
    jobId: string

    @Field({nullable: true})
    tag?: string
}