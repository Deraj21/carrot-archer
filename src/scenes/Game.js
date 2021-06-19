import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  constructor(){
    super('game')

    this.player = undefined
  }

  preload(){
    this.load.image('sky', 'assets/bg_layer.png')
    this.load.image('bunny1', 'assets/bunny_stand.png')
  }

  create(){
    const center = {
      x: this.scale.width / 2,
      y: this.scale.height / 2
    }

    this.add.image(400, 300, 'sky')

    this.player = this.physics.add.sprite(center.x, center.y, 'bunny1')
  }

  update(){

  }
}