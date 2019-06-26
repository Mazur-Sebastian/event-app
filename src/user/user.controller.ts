import { ExtractJwt } from 'passport-jwt';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@ApiUseTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiBearerAuth()
    @Get('getUsers')
    // @UseGuards(AuthGuard('jwt'))
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @ApiBearerAuth()
    @Get('getUser')
    @UseGuards(AuthGuard('jwt'))
    async getUser(): Promise<User> {
        const token = ExtractJwt.fromAuthHeaderAsBearerToken();
        console.log('tokencontroller', token);
        return this.userService.getUser(token);
    }
}
