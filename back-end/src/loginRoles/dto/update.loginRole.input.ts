import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateLoginRoleInput {
    @Field(() => ID)
    id: string

    @Field(() => ID)
    roleId: string

    @Field(() => ID)
    loginId: string
}