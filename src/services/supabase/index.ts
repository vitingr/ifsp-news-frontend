import { Account } from './account'
import { Articles } from './articles'
import { Authors } from './authors'
import { Categories } from './categories'
import { Invites } from './invites'
import { Users } from './users'

export class Supabase {
  public articles: Articles
  public categories: Categories
  public account: Account
  public authors: Authors
  public invites: Invites
  public users: Users

  constructor() {
    this.articles = new Articles()
    this.categories = new Categories()
    this.account = new Account()
    this.authors = new Authors()
    this.invites = new Invites()
    this.users = new Users()
  }
}
