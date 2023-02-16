import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByPseudo(username);
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.pseudo, sub: user.id };

        return {
            statusCode: 200,
            message: "Connection réussie",
            data: {
                access_token: this.jwtService.sign(payload),
            },
        };
    }
}
