import { Field, ID, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export class UpdateNotificationSettingInput {
    @Field(() => ID)
    @IsNotEmpty()
    id: string

    @Field(() => ID)
    @IsNotEmpty()
    candidateId: string

    @Field({nullable: true})
    @IsEmail()
    email?: boolean

    @Field({nullable: true})
    status?: boolean

    @Field({nullable: true})
    opportunities?: boolean

    @Field({nullable: true})
    resume?: boolean
}