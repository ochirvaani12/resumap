import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateNotificationSettingInput } from "./dto/create.notificationSetting.input";
import { UpdateNotificationSettingInput } from "./dto/update.notificationSetting.input";
import { NotificationSetting } from "./notificationSetting.entity";

@Injectable()
export class NotificationSettingsService {
    constructor(
        @InjectRepository(NotificationSetting) private notificationSettingsRepository: Repository<NotificationSetting>,
    ) {}

    async getNotificationSettings(): Promise<NotificationSetting[]> {
        return await this.notificationSettingsRepository.find({});
    }

    async getNotificationSetting(id: string): Promise<NotificationSetting> {
        return await this.notificationSettingsRepository.findOneOrFail({id: id});
    }

    async createNotificationSetting(createNotificationSettingInput: CreateNotificationSettingInput): Promise<NotificationSetting> {
        return await this.notificationSettingsRepository.save(createNotificationSettingInput);
    }

    async deleteNotificationSetting(id: string): Promise<NotificationSetting> {
        const notificationSetting = await this.notificationSettingsRepository.findOneOrFail({id: id});
        this.notificationSettingsRepository.remove(notificationSetting);
        return notificationSetting;
    }

    async updateNotificationSetting(updateNotificationSettingInput: UpdateNotificationSettingInput): Promise<NotificationSetting> {
        if(await this.notificationSettingsRepository.findOneOrFail({id: updateNotificationSettingInput.id})){
            const updatedNotificationSetting = this.notificationSettingsRepository.create(updateNotificationSettingInput);
            return await this.notificationSettingsRepository.save(updatedNotificationSetting);
        }
    }
}