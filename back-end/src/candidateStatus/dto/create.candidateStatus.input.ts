import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCandidateStatusInput {
    @Field(() => ID, {nullable: true})
    jobId: string

    @Field(() => ID, {nullable: true})
    candidateId: string

    @Field({nullable: true})
    status: string
}