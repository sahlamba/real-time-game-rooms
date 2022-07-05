import JottoDatabase from './db.js'
import Game from './models/Game.js'

/* eslint-disable require-jsdoc */
export default class Jotto {
  static db = new JottoDatabase()

  static newGame(player, settings) {
    const game = new Game(player, settings)
    this.db.saveGame(game)
    return game
  }

  static getGame(id) {
    return this.db.getGame(id)
  }
}
