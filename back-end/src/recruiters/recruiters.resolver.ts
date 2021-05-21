import { Resolver, Query, Args, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { Public } from "src/auth/public";
import { Login } from "src/login/login.entity";
import { LoginService } from "src/login/login.service";
import { CreateRecruiterInput } from "./dto/create.recruiter.input";
import { UpdateRecruiterInput } from "./dto/update.recruiter.input";
import { Recruiter } from "./recruiter.entity";
import { RecruitersService } from "./recruiters.service";

@Resolver(() => Recruiter)
export class RecruitersResolver {
    constructor(
        private readonly recruiterService: RecruitersService,
        private readonly loginService: LoginService,
    ) {}

    // QUERIES
    @Query(() => [Recruiter])
    async getRecruiters() {
        return await this.recruiterService.getRecruiters();
    }

    @Query(() => Recruiter)
    async getRecruiter(@Args('id') id: string) {
        return await this.recruiterService.getRecruiter(id);
    }

    // RESOLCEFIELD
    @ResolveField(() => Login)
    async login(@Parent() recruiter: Recruiter) {
        return await this.loginService.getLoginData(recruiter.id);
    }

    @ResolveField(() => Recruiter)
    async createdBy(@Parent() recruiter: Recruiter) {
        return await this.recruiterService.getRecruiter(recruiter.createdById);
    }

    // MUTATIONS
    @Mutation(() => Recruiter)
    @Public()
    async createRecruiter(@Args('createRecruiterInput') createRecruiterInput: CreateRecruiterInput) {
        return await this.recruiterService.createRecruiter(createRecruiterInput);
    }

    @Mutation(() => Recruiter)
    async deleteRecruiter(@Args('id') id: string) {
        return await this.recruiterService.deleteRecruiter(id);
    }

    @Mutation(() => Recruiter)
    async updateRecruiter(@Args('updateRecruiterInput') updateRecruiterInput: UpdateRecruiterInput) {
        return await this.recruiterService.updateRecruiter(updateRecruiterInput);
    }
}