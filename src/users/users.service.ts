import { Injectable } from '@nestjs/common';

import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    createUser(userData): User {
        this.users.push(userData);
        return userData;
    }

    getAllUsers(): User[] {
        return this.users;
    }
}
