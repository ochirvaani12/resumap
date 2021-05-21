import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateTagInput {
    @Field(() => ID)
    id: string

    @Field(() => ID, {nullable: true})
    jobId?: string

    @Field({nullable: true})
    tag?: string
}