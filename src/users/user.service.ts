import { CreateUserDTO } from './dtos/createUser.dto';
import { PrismaService } from './../database/prisma.service';
import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateUserDTO) {
    const hashedPassword = await hash(body.password, 4);

    const userWithSameEmail = await this.prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (userWithSameEmail) {
      throw new ConflictException('User with this email alredy exists');
    }

    return this.prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password_hash: hashedPassword,
      },
    });
  }
}
