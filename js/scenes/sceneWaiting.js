class SceneWaiting extends Phaser.Scene {
    constructor() {
        super('SceneWaiting');
    }

    preload() {}

    create() {

      this.scene.start("SceneMain");

      this.aGrid = new AlignGrid({
        scene: this,
        rows: 5,
        cols: 5
      });

      // this.aGrid.showNumbers()

      this.waitingText = this.add.text(
          0,
          0,
          "منتظر رقیبیم ...",
          {
            fontFamily: 'lalezar',
            fontSize: game.config.width / 14,
            rtl: true,
            align: 'center',
            color: '#FFFFFF',

          }
      )
      this.waitingText.setOrigin(0.5, 0.5)
      this.aGrid.placeAtIndex(12, this.waitingText)

      Align.scaleToGameW(this.waitingText, 0.5)

      if (controller == null) {
        controller = new Controller();
      } else {
        controller = new Controller();
      }
      console.log("->>>>> im secne waiting...")

    }


    update() {}
}
