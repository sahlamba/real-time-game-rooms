/* eslint-disable require-jsdoc */
export default class PlayerState {
  player // Game player: Player
  isReady // Is player ready?: boolean
  results // Player's turn results: [] of objects

  constructor(player) {
    this.player = player
    this.isReady = false
    this.results = []
  }

  static from(json) {
    return Object.assign(new PlayerState(), json)
  }

  setIsReady() {
    this.isReady = true
  }

  addTurnResult(result) {
    this.results.push(result)
  }
}
