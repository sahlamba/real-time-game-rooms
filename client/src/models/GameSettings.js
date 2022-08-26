export default class GameSettings {
  maxPlayers // int

  constructor(maxPlayers, wordLength) {
    this.maxPlayers = maxPlayers
  }

  static from(json) {
    return Object.assign(new GameSettings(), json)
  }
}
