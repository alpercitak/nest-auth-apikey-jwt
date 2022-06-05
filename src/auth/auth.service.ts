import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateApiKey(apiKey: string) {
    const apiKeys: string[] = ['api-key-1', 'api-key-2'];
    return apiKeys.find((key) => apiKey == key);
  }
}
