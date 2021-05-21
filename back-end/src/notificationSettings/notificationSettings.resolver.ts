import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Candidates } from "src/candidates/candidate.entity";
import { CandidatesService } from "src/candidates/candidates.service";
import { CreateNotificationSettingInput } from "./dto/create.notificationSetting.input";
import { UpdateNotificationSettingInput } from "./dto/update.notificationSetting.input";
import { NotificationSetting } from "./notificationSetting.entity";
import { NotificationSettingsService } from "./notificationSettings.service";

@Resolver(() => NotificationSetting)
export class NotificationSettingsResolver {
    constructor(
        private readonly notificationSettingsService: NotificationSettingsService,
        private readonly candidatesService: CandidatesService,
    ) {}

    // QUERIES
    @Query(() => [NotificationSetting])
    async getNotificationSettings() {
        return await this.notificationSettingsService.getNotificationSettings();
    }

    @Query(() => NotificationSetting)
    async getNotificationSetting(@Args('id') id: string) {
        return await this.notificationSettingsService.getNotificationSetting(id);
    }

    // RESOLVEFIELD
    @ResolveField(() => Candidates)
    async candidate(@Parent() notificationSetting: NotificationSetting) {
        return await this.candidatesService.getCandidate(notificationSetting.id);
    }

    // MUTATIONS
    @Mutation(() => NotificationSetting)
    async createNotificationSetting(@Args('createNotificationSettingInput') createNotificationSettingInput: CreateNotificationSettingInput) {
        return await this.notificationSettingsService.createNotificationSetting(createNotificationSettingInput);
    }

    @Mutation(() => NotificationSetting)
    async deleteNotificationSetting(@Args('id') id: string) {
        return await this.notificationSettingsService.deleteNotificationSetting(id);
    }

    @Mutation(() => NotificationSetting)
    async updateNotificationSetting(@Args('updateNotificationSettingInput') updateNotificationSettingInput: UpdateNotificationSettingInput) {
        return await this.updateNotificationSetting(updateNotificationSettingInput);
    }
        
}