import { Me } from './me'

export class Account {
  public me: Me

  constructor() {
    this.me = new Me()
  }
}
