import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

describe('Users Controller', () => {
    let usersController: UsersController;
    let usersService: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService],
        }).compile();

        usersController = module.get<UsersController>(UsersController);
        usersService = module.get<UsersService>(UsersService);
    });

    describe('getAllUsers', () => {
        it('should return an array of all users', async () => {
            const result: User[] = [
                {
                    userName: 'Tomasz',
                    email: 'tomasz@gmail.com',
                    password: 'pass',
                },
            ];
            jest.spyOn(usersService, 'getAllUsers').mockImplementation(
                () => result,
            );

            expect(await usersController.getAllUsers()).toBe(result);
        });
    });

    describe('createUser', () => {
        it('should return created user', async () => {
            const user: User = {
                userName: 'Tomasz',
                email: 'tomasz@gmail.com',
                password: 'pass',
            };

            jest.spyOn(usersService, 'createUser').mockImplementation(
                () => user,
            );

            expect(await usersController.createUser(user)).toBe(user);
        });
    });
});
