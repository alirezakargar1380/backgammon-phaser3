class SceneLoad extends Phaser.Scene {

    constructor() {
        super('SceneLoad');
    }

    preload() {
        this.load.image("progress_bg", "images/progress_bg.png");
        this.load.image("progress_fill", "images/progress_fill.png");
        this.load.image("avatar_mask", "images/avatar_mask.png");
        this.load.image("score_box", "images/score_box.png");
        this.load.image("avatar_placeholder", "images/avatar_placeholder.png");
        this.load.image("my_avatar", my_avatar_url);
        this.load.image("opponent_avatar", opponent_avatar_url);
        // GAME
        this.load.image("backgammon", "images/backgammon.png");
        this.load.image("black_bead", "images/black_bead.png");

    }

    create() {
        // this.scene.start("SceneWaiting");
        this.scene.start("SceneMain");
    }

}