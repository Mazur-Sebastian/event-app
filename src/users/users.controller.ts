import { Controller, Post, Get, Body } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.usersService.getAllUsers();
    }
}
