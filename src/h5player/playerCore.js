class playerCore {
  constructor (playerInstance) {
    this.config = {
      player: playerInstance || null,
      fontSize: 12,
      scale: 1,
      translate: {
        x: 0,
        y: 0
      },
      playbackRate: 1,
      lastPlaybackRate: 1,
      /* 快进快退步长 */
      skipStep: 5
    }
  }

  getPlayer () {
    return this.config.player
  }

  setPlayer (playerInstance) {
    this.config.player = playerInstance
  }

  initPlayerInstance (isSingle) {
    //
  }
}

export default playerCore
