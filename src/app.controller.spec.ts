import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TeamController } from '../src/team.controller';
import { TeamService } from '../src/team.service';

describe('TeamController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [TeamService],
      controllers: [TeamController],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(app.getHttpServer()).toBeDefined();
    });
  });
});
