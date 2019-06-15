import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @MinLength(6, {
        message: 'Name must have min 6 sings',
    })
    readonly userName: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly password: string;
}
