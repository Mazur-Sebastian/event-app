import {
    Injectable,
    NotFoundException,
    ForbiddenException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/createUser.dto';
import { USER_SCHEMA } from 'src/constants/schemas';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(USER_SCHEMA)
        private readonly userModel: Model<User>,
    ) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.getUser(createUserDto.email);

        if (user) {
            throw new NotFoundException('User exist');
        }
        console.log('createUserDto', createUserDto);
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find();
    }

    async findUserById(id: string): Promise<User> {
        return await this.userModel.findById({ id });
    }

    async getUser(email: string): Promise<User> {
        return await this.userModel.findOne({ email }).exec();
    }
}
