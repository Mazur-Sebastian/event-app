import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';

describe('Users Controller', () => {
    let usersController: UsersController;
    let usersService: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersController],
        }).compile();

        usersController = module.get<UsersController>(UsersController);
        usersService = module.get<UsersService>(UsersController);
    });

    it('should be defined', () => {
        expect(UsersController).toBeDefined();
    });

    describe('getAllUsers', () => {
        it('should return an array of all users', async () => {
            const result: User[] = [
                {
                    userName: 'Tomasz',
                    login: 'tomasz@gmail.com',
                    password: 'pass',
                },
            ];
            jest.spyOn(usersService, 'getAllUsers').mockImplementation(
                () => result,
            );

            expect(await usersController.getAllUsers()).toBe(result);
        });
    });
});
