import { PrismaService } from '../../database/prisma.service';
import { teamMemberReposity } from '../team-member-repository';
import { teamMember } from '../../validations/team-member';
import { Injectable } from '@nestjs/common';

@Injectable()
export class prismaTeamMemberRepository implements teamMemberReposity {
  constructor(private prisma: PrismaService) {}

  async create({ id, name, position }): Promise<teamMember> {
    const result = await this.prisma.teamMember.create({
      data: {
        id,
        name,
        position,
      },
    });
    return result;
  }
  async getOne(id: string): Promise<teamMember> {
    const result = await this.prisma.teamMember.findUnique({
      where: { id },
    });
    return result;
  }
}
