import GameDatabase from './db.js'
import Game from './models/Game.js'

/* eslint-disable require-jsdoc */
export default class GameEngine {
  static db = new GameDatabase()

  static newGame(player, settings) {
    const game = new Game(player, settings)
    this.db.insertGame(game)
    return game
  }

  static getGame(gameCode) {
    const gameJson = this.db.getGameById(gameCode)
    if (gameJson) {
      return Game.from(gameJson)
    }
    return null
  }

  static getGameOrThrow(gameCode) {
    const game = this.getGame(gameCode)
    if (!game) {
      throw new Error(`Could not find game with code: ${gameCode}`)
    }
    return game
  }

  static joinGame(gameCode, player) {
    const game = this.getGameOrThrow(gameCode)
    game.addPlayer(player)
    this.db.updateGame(game)
    /*
     * If player has already joined the game,
     * this method will throw an error (expected behviour).
     */
    this.db.insertPlayerGame(player, gameCode)
  }

  static getPlayerJoinedGames(playerId) {
    return this.db.getPlayerGamesByPlayerId(playerId)
  }

  static readyPlayer(gameCode, player) {
    const game = this.getGameOrThrow(gameCode)
    game.readyPlayer(player)
    this.db.updateGame(game)
  }

  static startGame(gameCode) {
    const game = this.getGameOrThrow(gameCode)
    game.startGame()
    this.db.updateGame(game)
  }

  static acceptGameplayInput(gameCode, player, data) {
    const game = this.getGameOrThrow(gameCode)
    const result = game.acceptGameplayInput(player, data)
    this.db.updateGame(game)
    return result
  }
}
