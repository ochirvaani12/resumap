import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateJobstatusInput {
    @Field()
    status: string

    @Field(() => ID)
    jobId: string
}