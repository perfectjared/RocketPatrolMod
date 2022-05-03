class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.world = new World('data/Play.json')
    }

    //entities

    //systems


    //control flow
    preload() {
        Systems.loadImages(this.world.entities, this)
    }

    create() {
        Systems.setBackground(this.world.entities, this)
    }

    update() {

    }
}
