import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateJobstatusInput {
    @Field(() => ID)
    id: string

    @Field({nullable: true})
    status?: string

    @Field(() => ID, {nullable: true})
    jobId?: string
}