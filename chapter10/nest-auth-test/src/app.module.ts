import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'nest-auth-test.sqlite',
      entities: [],
      synchronize: true, // db에 스키마 동기화
      logging: true,
    }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
