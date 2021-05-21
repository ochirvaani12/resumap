import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateNotesModule } from './candidateNotes/candidateNotes.module';
import { CandidatesModule } from './candidates/candidates.module';
import { CandidateStatusModule } from './candidateStatus/candidateStatus.module';
import { CandidateTagsModule } from './candidateTags/candidateTags.module';
import { CompaniesModule } from './companies/companies.module';
import { InquiresModule } from './inquires/inquires.module';
import { JobsModule } from './jobs/jobs.module';
import { JobstatusModule } from './jobstatus/jobstatus.module';
import { JobCandidatesModule } from './job_candidates/job_candidates.module';
import { LoginModule } from './login/login.module';
import { LoginRolesModule } from './loginRoles/loginRoles.module';
import { NotificationSettingsModule } from './notificationSettings/notificationSettings.module';
import { RecruitersModule } from './recruiters/recruiters.module';
import { ResumesModule } from './resumes/resumes.module';
import { RolesModule } from './roles/roles.module';
import { SocialLinksModule } from './socialLinks/socialLinks.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    CandidatesModule,
    RecruitersModule,
    CompaniesModule,
    LoginModule,
    ResumesModule,
    JobsModule,
    JobCandidatesModule,
    InquiresModule,
    NotificationSettingsModule,
    SocialLinksModule,
    JobstatusModule,
    TagsModule,
    CandidateTagsModule,
    CandidateNotesModule,
    RolesModule,
    LoginRolesModule,
    CandidateStatusModule,
    TypeOrmModule.forRoot({}),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({req}) => ({ headers: req.headers }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
