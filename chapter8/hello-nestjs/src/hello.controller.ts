import { Controller, Get } from "@nestjs/common"; // 필요한 함수 임포트

@Controller()
export class HelloController {
    @Get()
    hello() {
        return "Hello NestJS!"
    }
}