import Phaser from "phaser";
import { CST } from '../CST';

class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.GAME });
    }

    init(data) {
        console.log("GameScene init: ", data);
    }

    preload() {
        //do nothing
    }

    create() {
        let back = this.add.image(0, 0, CST.ASSETS.gameSceneBackground);
        back.setOrigin(0, 0);

        let gameAtlas = this.textures.get(CST.ASSETS.gameAtlas);
        this.ball = this.physics.add.image(300, 300, gameAtlas, CST.ASSETS.OBJECTS.ball);
        this.ball.setCircle(this.ball.width / 2);
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocity(200, 200);

        //this.physics.add.collider(ball1, ball2);
    }

    update(time, delta) {

    }
}

export default MenuScene; 
