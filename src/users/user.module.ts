import { PrismaModule } from './../database/prisma.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule],
})
export class UserModule {}
