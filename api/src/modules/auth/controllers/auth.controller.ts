import { Controller, Post, Body } from '@nestjs/common';
import { LogInDto } from '../dtos/login.dto';
import { AuthService } from '../services/auth.service';
import { SignUpDto } from './../dtos/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto)
  }

  @Post('/login')
  login(@Body() loginDto: LogInDto): Promise<{ token: string }> {
    return this.authService.login(loginDto)
  }
}