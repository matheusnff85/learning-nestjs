import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { teamMember } from './validations/team-member';
import { teamMemberReposity } from './repositories/team-member-repository';

@Injectable()
export class TeamService {
  constructor(private readonly teamMemberRepository: teamMemberReposity) {}

  async newMember(newMember: teamMember) {
    const { name, position } = newMember;
    const result = await this.teamMemberRepository.create({
      id: randomUUID(),
      name,
      position,
    });
    return result;
  }

  async getMember(id: string) {
    const result = await this.teamMemberRepository.getOne(id);
    if (!result) throw new Error('Member not found');
    return result;
  }
}
