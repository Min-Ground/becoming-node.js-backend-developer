import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import config from './configs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, // 전역 모듈 설정하기
    envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`, // env 경로 지정
    load: [config], // 커스텀 파일 설정
    cache: true // 캐시 적용
  }), WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
