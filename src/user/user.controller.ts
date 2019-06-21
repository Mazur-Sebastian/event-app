import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';

@ApiUseTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('createUser')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @ApiBearerAuth()
    @Get('getUsers')
    @UseGuards(AuthGuard('jwt'))
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }
}
