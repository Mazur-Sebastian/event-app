import {
    Injectable,
    ForbiddenException,
    BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { User } from './../user/interfaces/user.interface';
import { UserService } from './../user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtToken } from './interfaces/JwtToken';
import { CreateUserDto } from './../user/dto/createUser.dto';

const saltRounds = 10;
@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {}

    async loginUser(loginData: LoginDto): Promise<JwtToken | any> {
        try {
            const { _id, password } = await this.userService.getUser(
                loginData.email,
            );

            const match = await bcrypt.compare(loginData.password, password);

            if (!match) {
                return new BadRequestException('Bad password');
            }

            const accessToken = this.jwtService.sign({ id: _id });

            return { accessToken };
        } catch (error) {
            throw new ForbiddenException();
        }
    }

    async registerUser(registerData: CreateUserDto): Promise<JwtToken> {
        try {
            const hashPassword = await bcrypt.hash(
                registerData.password,
                saltRounds,
            );
            const userWithHashPassword = {
                ...registerData,
                password: hashPassword,
            };
            const { _id } = await this.userService.createUser(
                userWithHashPassword,
            );
            const accessToken = this.jwtService.sign({ id: _id });

            return { accessToken };
        } catch (error) {
            throw new ForbiddenException('Some message');
        }
    }

    async validateUser(id: string): Promise<User> {
        return await this.userService.findUserById(id);
    }

    async verifyToken({ accessToken }: JwtToken): Promise<string | object> {
        return await jwt.verify(accessToken, process.env.SECRET_KEY);
    }
}
