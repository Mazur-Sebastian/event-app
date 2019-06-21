import { Controller, Body, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { TokenDto } from './dto/token.dto';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() loginData: LoginDto) {
        return await this.authService.createToken(loginData);
    }

    @Post('validate')
    async verifyToken(@Body() payload: TokenDto) {
        return await this.authService.verifyToken(payload);
    }
}
