import { Field, ID, InputType } from "@nestjs/graphql";
import { CreateCompanyInput } from "src/companies/dto/create.company.input";

@InputType()
export class CreateJobInput {
    @Field(() => ID, {nullable: true})
    recruiterId?: string

    @Field(() => ID, {nullable: true})
    companyId?: string

    @Field({nullable: true})
    jobTitle?: string

    @Field({nullable: true})
    location?: string

    @Field({nullable: true})
    industry?: string

    @Field({nullable: true})
    jobDescription?: string

    @Field({nullable: true})
    qualification?: string

    @Field({nullable: true})
    requirements?: string

    @Field({nullable: true})
    postDate?: string

    @Field(() => CreateCompanyInput, {nullable: true})
    company?: CreateCompanyInput
}