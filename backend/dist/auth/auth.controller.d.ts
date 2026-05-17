import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private jwtService;
    constructor(jwtService: JwtService);
    login(body: {
        password: string;
    }): {
        token: string;
    };
}
