import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MessagesController } from './message.controller';
import { MessagesService } from './message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesRepository } from './message.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([MessagesRepository])],
  controllers: [MessagesController],
  providers: [MessagesService, ConfigModule],
  exports: [MessagesService],
})

export class MessagesModule {}
