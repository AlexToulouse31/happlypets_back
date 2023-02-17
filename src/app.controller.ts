import {
  Controller,
  Get,
  Post,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { ExcludeNullInterceptor } from './Interceptor/interceptor';
@UseInterceptors(ExcludeNullInterceptor)
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
