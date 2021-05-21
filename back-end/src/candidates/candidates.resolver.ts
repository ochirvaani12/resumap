import { UseGuards } from "@nestjs/common";
import { Resolver, Query, Args, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { AuthGuard } from "src/auth/auth.guard";
import { Public } from "src/auth/public";
import { Roles } from "src/auth/role.enum";
import { Roles1 } from "src/auth/roles.decorator";
import { Login } from "src/login/login.entity";
import { LoginService } from "src/login/login.service";
import { Candidates } from "./candidate.entity";
import { CandidatesService } from "./candidates.service";
import { CreateCandidateInput } from "./dto/create.candidate.input";
import { UpdateCandidateInput } from "./dto/update.candidate.input";

@Resolver(() => Candidates)
export class CandidatesResolver {
    constructor( 
        private readonly candidatesService: CandidatesService,
        private readonly loginService: LoginService,
    ) {}

    // QUERIES
    @Query(() => [Candidates])
    async getCandidates() {
        return await this.candidatesService.getCandidates();
    }

    @Query(() => Candidates)
    async getCandidate( @Args('id') id: string) {
        return await this.candidatesService.getCandidate(id);
    }

    // RESOLVERFIELD
    @ResolveField(() => Login)
    async login( @Parent() candidate: Candidates) {
        return await this.loginService.getLoginData(candidate.id);
    }

    // MUTATION
    @Mutation(() => Candidates)
    @Public()
    async createCandidate( @Args('createCandidateInput') createCandidateInput: CreateCandidateInput) {
        return await this.candidatesService.createCandidate(createCandidateInput);
    }

    @Mutation(() => Candidates)
    async deleteCandidate( @Args('id') id: string) {
        return await this.candidatesService.deleteCandidate(id);
    }

    @Mutation(() => Candidates)
    async updateCandidate( @Args('updateCandidateInput') updateCandidateInput: UpdateCandidateInput) {
        return await this.candidatesService.updateCandidate(updateCandidateInput);
    }
} 