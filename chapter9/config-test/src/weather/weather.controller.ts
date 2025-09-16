import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('weather')
export class WeatherController {
    constructor(private configService: ConfigService) { }

    @Get()
    public getWeather(): string {
        const apiUrl = this.configService.get('WEATHER_API_URL');
        const apiKey = this.configService.get('WEATHER_API_KEY');

        return this.callWeatherApi(apiUrl, apiKey);
    }

    private callWeatherApi(apiUrl: any, apiKey: any): string {
        console.log('날씨 정보 가져오는 중');
        console.log(`apiUrl: ${apiUrl}`);
        console.log(`apikey: ${apiKey}`);
        return '내일은 맑음';
    }
}
