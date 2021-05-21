import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateRoleInput {
    @Field(() => ID)
    id: string

    @Field()
    name: string
}