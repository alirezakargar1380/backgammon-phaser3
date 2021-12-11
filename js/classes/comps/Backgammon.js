class Backgammon extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;

    this.backgammon = this.scene.add.image(0, 0, "backgammon")
    this.add(this.backgammon)


    this.scene.add.existing(this);
    // ================================================= left up
    // from left side + bead size + stroke
    this.bead = this.scene.add.image(
        (94+(60*1)+(5*1)),
        500, "black_bead")

    // 14
    this.bead = this.scene.add.image(
        (94+(60*2)+(5*2)),
        500+(60*0), "black_bead")

    this.bead = this.scene.add.image(
        (94+(60*2)+(5*2)),
        (500+(60*1)), "black_bead")

    this.bead = this.scene.add.image(
        (94+(60*2)+(5*2)),
        (500+(60*2)), "black_bead")


    // ================================================= left down
    this.stroke = 3
    this.bead_size = 60

    this.bead = this.scene.add.image(
        (94+(60*2)+(3*2)),
        (1100+(this.bead_size/2) + (this.stroke) - ((this.bead_size)*0) ), "black_bead")


    this.bead = this.scene.add.image(
        (94+(60*2)+(3*2)),
        (1100+(this.bead_size/2) + (this.stroke) - ((this.bead_size)*1) ), "black_bead")


    // ================================================= right up
    console.log(game.config.width)
    // 24
    this.bead = this.scene.add.image(
        game.config.width-(94+(60*1)+(5*1)),
        (500+(60*0)), "black_bead")

    // ================================================= right down
    this.bead = this.scene.add.image(
        game.config.width-(94+(60*1)+(4*1)),
        (1100+((this.bead_size/2)) + (this.stroke) - ((this.bead_size)*0) ), "black_bead")
  }
}