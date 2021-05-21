import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateCandidateStatusInput {
    @Field(() => ID)
    id: string

    @Field(() => ID, {nullable: true})
    jobId: string

    @Field(() => ID, {nullable: true})
    candidateId: string

    @Field({nullable: true})
    status: string
}