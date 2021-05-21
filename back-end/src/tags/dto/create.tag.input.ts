import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTagInput {
    @Field(() => ID)
    jobId: string

    @Field()
    tag: string
}