import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Recruiter } from "src/recruiters/recruiter.entity";
import { RecruitersService } from "src/recruiters/recruiters.service";
import { CompaniesService } from "./companies.service";
import { Companies } from "./company.entity";
import { CreateCompanyInput } from "./dto/create.company.input";
import { UpdateCompanyInput } from "./dto/update.company.input";


@Resolver(() => Companies)
export class CompaniesResolver {
    constructor(
        private readonly companiesService: CompaniesService,
        private readonly recruiterService: RecruitersService,
    ) {}

    // QUERIES
    @Query(() => [Companies])
    async getCompanies() {
        return await this.companiesService.getCompanies();
    }

    @Query(() => Companies)
    async getCompany(@Args('id') id: string) {
        return await this.companiesService.getCompany(id);
    }

    // RESOLVERFIELD
    @ResolveField(() => Recruiter)
    async recruiter(@Parent() company: Companies) {
        return await this.recruiterService.getRecruiter(company.recruiterId);
    }

    // MUTATION
    @Mutation(() => Companies)
    async createCompany(@Args('createCompanyInput') createCompanyInput: CreateCompanyInput) {
        return await this.companiesService.createCompany(createCompanyInput);
    }

    @Mutation(() => Companies)
    async deleteCompany(@Args('id') id: string) {
        return await this.companiesService.deleteCompany(id);
    }

    @Mutation(() => Companies)
    async updateCompany(@Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput) {
        return await this.companiesService.updateCompany(updateCompanyInput);
    }
}