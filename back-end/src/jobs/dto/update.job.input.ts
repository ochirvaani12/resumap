import { Field, ID, InputType } from "@nestjs/graphql";
import { UpdateCompanyInput } from "src/companies/dto/update.company.input";

@InputType()
export class UpdateJobInput {
    @Field(() => ID)
    id: string

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

    @Field(() => UpdateCompanyInput, {nullable: true})
    company?: UpdateCompanyInput
}