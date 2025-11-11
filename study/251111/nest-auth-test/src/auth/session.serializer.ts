import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { LoginDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private userService: UserService) {
    super();
  }

  serializeUser(user: LoginDto, done: (err: unknown, user: unknown) => void) {
    done(null, user.email);
  }

  async deserializeUser(
    payload: string,
    done: (err: Error | null, user?: unknown) => void,
  ): Promise<void> {
    console.log(payload);
    const user = await this.userService.getUser(payload);

    if (!user) {
      done(new Error('no user'), null);
      return;
    }

    const { password, ...userInfo } = user;
    console.log(password);

    done(null, userInfo);
  }
}
