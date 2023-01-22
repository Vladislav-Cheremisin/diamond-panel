import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getRoot() {
    return '<h3>This is root page of user service</h3>';
  }
}
