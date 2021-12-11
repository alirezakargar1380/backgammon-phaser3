class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {}

  create() {
    console.log("scene main")
    this.aGrid = new AlignGrid({
      scene: this,
      rows: 20,
      cols: 11
    });
    this.aGrid.showNumbers()

    this.Backgammon = new Backgammon({
      scene: this
    })
    this.aGrid.placeAtIndex(93, this.Backgammon)


  }

  update() {}

}