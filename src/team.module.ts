import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { PrismaService } from './database/prisma.service';
import { teamMemberReposity } from './repositories/team-member-repository';
import { prismaTeamMemberRepository } from './repositories/prisma/prisma-team-member-repository';

@Module({
  imports: [],
  controllers: [TeamController],
  providers: [
    TeamService,
    PrismaService,
    {
      provide: teamMemberReposity,
      useClass: prismaTeamMemberRepository,
    },
  ],
})
export class TeamModule {}
