import { v4 as uuidV4 } from 'uuid'

export default class User {
  constructor(name) {
    this.name = name
    this.id = uuidV4()
  }
}
