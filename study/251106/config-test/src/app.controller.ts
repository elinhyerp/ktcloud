import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  // config service 주입
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    // config service 사용
    return this.configService.get('MESSAGE') as string;
  }

  @Get('service-url')
  getServiceUrl(): string {
    return this.configService.get('SERVICE_URL') as string;
  }

  @Get('db-info')
  getDbInfo(): string {
    console.log(this.configService.get('logLevel'));
    console.log(this.configService.get('dbInfo'));

    return this.configService.get('dbInfo') as string;
  }

  @Get('redis-info')
  getRedisInfo(): string {
    return `${this.configService.get('redis.host')}:${this.configService.get('redis.port')}`;
  }
}
