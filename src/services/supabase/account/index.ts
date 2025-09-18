import { Profiles } from './profiles'

export class Account {
  public profiles: Profiles

  constructor() {
    this.profiles = new Profiles()
  }
}
