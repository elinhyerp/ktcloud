import type { ExecutionContext } from '@nestjs/common';
import { CanActivate, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request as ExpressRequest } from 'express';
import type { LoginDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: ExpressRequest = context.switchToHttp().getRequest();

    if (request.cookies['login']) {
      console.log('has cookie');
      return true;
    }

    const body = request.body as LoginDto;

    if (!body.email || !body.password) {
      return false;
    }

    const user = await this.authService.validateUser(body.email, body.password);

    if (!user) {
      return false;
    }

    request.user = user;
    return false;
  }
}

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    // super.canActivate()는 LocalStrategy의 validate() 메서드를 실행
    const request: ExpressRequest = context.switchToHttp().getRequest();
    await super.logIn(request); // SessionSerializer의 serializeUser()를 실행하며 세션 저장
    return result;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: ExpressRequest = context.switchToHttp().getRequest();
    return request.isAuthenticated(); // 세션에서 정보를 읽어서 인증 확인
  }
}

/*
@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  async canActivate(context: any): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request); // 세션 적용
    return result;
  }
} 
*/
