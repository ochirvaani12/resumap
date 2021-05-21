import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidatesModule } from "src/candidates/candidates.module";
import { NotificationSetting } from "./notificationSetting.entity";
import { NotificationSettingsResolver } from "./notificationSettings.resolver";
import { NotificationSettingsService } from "./notificationSettings.service";

@Module({
    imports: [
        CandidatesModule,
        TypeOrmModule.forFeature([NotificationSetting]),
    ],
    providers: [NotificationSettingsResolver, NotificationSettingsService],
    exports: [],
})

export class NotificationSettingsModule {}