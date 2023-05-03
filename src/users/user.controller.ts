import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    const user = await this.userService.create(body);

    return user;
  }
}
