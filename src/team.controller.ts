import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { TeamService } from './team.service';
import { teamMember } from './validations/team-member';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('member')
@ApiTags('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('create')
  @ApiResponse({
    status: 201,
    schema: { $ref: getSchemaPath(teamMember) },
  })
  async newMember(@Body() body: teamMember) {
    return await this.teamService.newMember(body);
  }

  @ApiResponse({
    status: 200,
    schema: { $ref: getSchemaPath(teamMember) },
  })
  @ApiResponse({
    status: 404,
    schema: { example: { error: 'Member not found' } },
  })
  @Get(':id')
  async getMember(@Param('id') id: string, @Res() res: Response) {
    try {
      const result = await this.teamService.getMember(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
}
