class Backgammon extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;

    this.backgammon = this.scene.add.image(0, 0, "backgammon")
    this.add(this.backgammon)

    
    this.scene.add.existing(this);
  }
}