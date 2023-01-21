import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot(): string {
    return '<h3>Here will be diamond panel content soon</h3>';
  }
}
