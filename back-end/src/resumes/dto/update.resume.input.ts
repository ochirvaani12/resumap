import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateResumeInput {
    @Field(() => ID)
    id: string

    @Field(() => ID, {nullable: true})
    candidateId?: string

    @Field({nullable: true})
    resumeText?: string

    @Field({nullable: true})
    title?: string

    @Field({nullable: true})
    resume?: string

    @Field({nullable: true})
    permission?: string

    @Field({nullable: true})
    uploadedDate: string
}