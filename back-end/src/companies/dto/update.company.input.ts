import { Field, ID, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateCompanyInput {
    @Field(() => ID)
    @IsNotEmpty()
    id: string

    @Field(() => ID, {nullable: true})
    recruiterId?: string

    @Field({nullable: true})
    name?: string

    @Field({nullable: true})
    logo?: string

    @Field({nullable: true})
    about?: string
}