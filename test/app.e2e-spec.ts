import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { TeamService } from '../src/team.service';
import { INestApplication } from '@nestjs/common';
import { TeamController } from '../src/team.controller';

describe('Testing API', () => {
  let app: INestApplication;
  const mockTeamService = {
    getMember: jest.fn().mockReturnValue({
      id: '0d6c104b-f11d-4fbe-baf4-9306165beb75',
      name: 'Kunigami',
      position: 'Mega Striker',
    }),
    newMember: jest.fn().mockReturnValue({
      id: '9411098f-afef-43a4-be90-0722e836e699',
      name: 'Bachira',
      position: 'Drible Master',
    }),
  };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [TeamService],
      controllers: [TeamController],
    })
      .overrideProvider(TeamService)
      .useValue(mockTeamService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('Testing GET route /:id', () => {
    return request(app.getHttpServer())
      .get('/member/0d6c104b-f11d-4fbe-baf4-9306165beb75')
      .expect(200)
      .expect({
        id: '0d6c104b-f11d-4fbe-baf4-9306165beb75',
        name: 'Kunigami',
        position: 'Mega Striker',
      });
  });

  it('Testing POST route /create', () => {
    return request(app.getHttpServer())
      .post('/create')
      .send({
        name: 'Bachira',
        position: 'Drible Master',
      })
      .expect(201)
      .expect({
        id: '9411098f-afef-43a4-be90-0722e836e699',
        name: 'Bachira',
        position: 'Drible Master',
      });
  });
});
