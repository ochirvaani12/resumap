import { Field, ID, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateCandidateNoteInput {
    @Field(() => ID)
    @IsNotEmpty()
    id: string

    @Field(() => ID)
    @IsNotEmpty()
    candidateId: string

    @Field(() => ID)
    @IsNotEmpty()
    jobId: string

    @Field({nullable: true})
    note?: string
}