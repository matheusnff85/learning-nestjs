import { teamMember } from 'src/validations/team-member';

export abstract class teamMemberReposity {
  abstract create(newTeamMember: teamMember): Promise<teamMember>;
  abstract getOne(id: string): Promise<teamMember>;
}
