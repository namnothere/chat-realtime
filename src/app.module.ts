import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesModule } from './models/messages/message.module';
import config from './orm-config';
import { Message } from './models/messages/entities/message.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "chat_realtime",
    entities: [Message],
    synchronize: true,
  }), 
    MessagesModule
  ],
  // imports: [TypeOrmModule.forRoot(config), 
  //   MessagesModule
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

export default config;