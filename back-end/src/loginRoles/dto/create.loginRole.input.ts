import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateLoginRoleInput {
    @Field(() => ID)
    roleId: string

    @Field(() => ID)
    loginId: string
}