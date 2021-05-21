--  create tables --
create table companies (
	id varchar(200),
    recruiterId varchar(200),
    name varchar(200),
    logo varchar(200),
    about varchar(2000),
    primary key (id),
    foreign key (recruiterId) references recruiter(id) on delete set null
);

create table resume (
	id varchar(200),
    candidateId varchar(200),
    title varchar(200),
    resumeText varchar(2000),
    resume varchar(2000),
    uploadedDate date,
    permission enum("view", "download"),
    primary key (id),
    foreign key (candidateId) references candidates(id) on delete cascade
);

create table job (
	id varchar(200),
    recruiterId varchar(200),
    companyId varchar(200),
    jobTitle varchar(200),
    location varchar(200),
    industry varchar(200),
    jobDescription varchar(2000),
    qualification varchar(2000),
    requirements varchar(2000),
    postDate date,
    primary key (id),
	foreign key (recruiterId) references recruiter(id) on delete set null,
    foreign key (companyId) references companies(id) on delete cascade
);

create table inquire (
	id varchar(200),
    jobId varchar(200),
    firstName varchar(200),
    lastName varchar(200),
    email varchar(200),
    phone varchar(200),
    location varchar(200),
    primary key (id),
    foreign key (jobId) references job(id) on delete cascade
);

create table tags (
	id varchar(200),
    jobId varchar(200),
    tag varchar(2000),
    primary key (id),
    foreign key (jobId) references job(id) on delete cascade
);

create table jobStatus (
	id varchar(200),
	jobId varchar(200),
    status enum("open", "draft", "closed", "canceled"),
    primary key (id),
    foreign key (jobId) references job(id) on delete cascade
);

create table candidate_notes (
	id varchar(200),
    jobId varchar(200),
    candidateId varchar(200),
    note varchar(2000),
    primary key (id),
    foreign key (jobId) references job(id) on delete cascade,
    foreign key (candidateId) references candidates(id) on delete cascade
);

create table candidate_tags (
	id varchar(200),
    candidateId varchar(200),
    jobId varchar(200),
    tag varchar(2000),
    primary key (id),
    foreign key (candidateId) references candidates(id) on delete cascade,
    foreign key (jobId) references job(id) on delete cascade
);

create table social_links (
	id varchar(200),
    candidateId varchar(200),
    title varchar(200),
    link varchar(200),
    primary key (id),
    foreign key (candidateId) references candidates(id) on delete cascade
);

create table job_candidate (
	id varchar(200),
	jobId varchar(200),
    candidateId varchar(200),
    resumeId varchar(200),
    appliedOn varchar(200),
    autoDelete boolean,
    primary key (id),
    foreign key (jobId) references job(id) on delete cascade,
    foreign key (candidateId) references candidates(id) on delete cascade,
    foreign key (resumeId) references resume(id) on delete set null
);

create table candidate_status (
	id varchar(200),
    candidateId varchar(200),
    jobId varchar(200),
    status enum("awaiting_screen", "shortlisted", "phone_screen", "client_interview", "review"),
    primary key (id),
    foreign key (candidateId) references candidates(id) on delete cascade,
    foreign key (jobId) references job(id) on delete cascade
);

create table login_role (
	id varchar(200),
	roleId varchar(200),
    loginId varchar(200),
    primary key (id),
    foreign key (roleId) references role(id) on delete set null,
    foreign key (loginId) references login(id) on delete cascade
);

create table notificationSettings (
	id varchar(200),
    candidateId varchar(200),
    emails boolean,
    status boolean,
    opportunities boolean,
    resume boolean,
    primary key (id),
    foreign key (candidateId) references candidates(id) on delete cascade 
);

