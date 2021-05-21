import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCompanyInput {
    @Field(() => ID, {nullable: true})
    recruiterId?: string

    @Field({nullable: true})
    name?: string

    @Field({nullable: true})
    logo?: string

    @Field({nullable: true})
    about?: string
}