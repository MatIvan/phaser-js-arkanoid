import Phaser from "phaser";
import { CST } from '../CST';

class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.MENU });
    }

    init(data) {
        console.log("MenuScene init: ", data);
    }

    create() {
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'logo');
    }

}

export default MenuScene; 
