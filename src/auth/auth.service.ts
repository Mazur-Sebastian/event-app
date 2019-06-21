import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';

import { User } from './../user/interfaces/user.interface';
import { UserService } from './../user/user.service';
import { LoginDto } from './dto/login.dto';
import { TokenDto } from './dto/token.dto';
import { JwtToken } from './interfaces/JwtToken';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {}

    async createToken(loginData: LoginDto): Promise<JwtToken> {
        const { email } = await this.userService.findUserByEmail(
            loginData.email,
        );
        // console.log('user', user);
        const accessToken = this.jwtService.sign({ email });
        return {
            expiresIn: 3600,
            accessToken,
        };
    }

    async validateUser(email: string): Promise<User> {
        // const user = this.userService.findUserByEmail(email);
        // if (!user) {
        //     throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        // }
        return await this.userService.findUserByEmail(email);
    }

    async verifyToken({ token }: TokenDto): Promise<string | object> {
        return await jwt.verify(token, process.env.SECRET_KEY);
    }
}
