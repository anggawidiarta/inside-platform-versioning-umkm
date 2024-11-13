export enum GenderEnum {
  Male = 'Laki-Laki',
  Female = 'Perempuan',
}

export enum PublicationStatusEnum {
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED',
}

export enum CompetitionTargetTypeEnum {
  Public = 'PUBLIC',
  Corporate = 'CORPORATE',
  PublicAndCorporate = 'PUBLIC_AND_CORPORATE',
}

export enum CompetitionTargetDetailToEnum {
  AllCorporate = 'ALL_CORPORATE',
  SpecificCorporate = 'SPECIFIC_CORPORATE',
  SpecificIndustry = 'SPECIFIC_INDUSTRY',
}

export enum ProSubmissionStatus {
  Draft = 'DRAFT',
  Completed = 'COMPLETED',
}

export enum SubmissionStatusEnum {
  Draft = 'DRAFT',
  Submitted = 'SUBMITTED',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  Winner = 'WINNER',
  Considered = 'CONSIDERED',
}

export enum SubmissionStatusEnumFilter {
  All = 'ALL',
}

export enum TabTypeEnum {
  Intro = 'Intro',
  Main = 'Main',
  Finish = 'Finish',
}

export enum StatusApprovalScreening {
  Accept = 'accept',
  Reject = 'reject',
  Consider = 'consider',
}

export enum StatusExport {
  Screening = 'screening',
  Scoring = 'scoring',
  All = 'all',
}

export enum ChatStatus {
  IdentifyProblem = 'identify-problem',
  CreateSolution = 'create-solution',
  WriteProposal = 'write-proposal',
  DevelopProposal = 'develop-proposal',
}

export enum CompetitionStepTypeEnum {
  Type12Steps = 'TYPE_12_STEPS',
  Type3Steps = 'TYPE_3_STEPS',
}

export enum CompetitionTypeEnum {
  Ideation = 'IDEATION',
  Implementation = 'IMPLEMENTATION',
}

export enum ScreeningStatusEnum {
  Screening = 'screening',
  Review = 'review',
  Commit = 'commit',
}

// export data submission
export enum ExportCollectionType {
  Incoming = 'incoming',
  Passed = 'passed',
  NotPassed = 'not-passed',
  Incomplete = 'incomplete',
}
