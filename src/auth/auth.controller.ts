import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth.guard';
import { Public } from './decorators/public.decorator';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

  
    @UseGuards(AuthGuard('local'))
    @Post('login')
    @Public()
    async login(@Request() req){
        console.log(req)
        return this.authService.login(req.user)
    }

}
