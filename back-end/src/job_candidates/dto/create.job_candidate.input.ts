import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateJobCandidateInput {
    @Field(() => ID, {nullable: true})
    jobId?: string

    @Field(() => ID, {nullable: true})
    candidateId?: string

    @Field(() => ID, {nullable: true})
    resumeId?: string

    @Field({nullable: true})
    appliedOn?: string

    @Field({nullable: true})
    autoDelete?: boolean
}