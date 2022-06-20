import Phaser from "phaser";
import { CST } from '../CST';
import Button from "../ui/Button";

class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.MENU });
    }

    init(data) {
        console.log("MenuScene init: ", data);
    }

    create() {
        let uiAtlas = this.textures.get(CST.ASSETS.uiAtlas);

        let back = this.add.image(0, 0, CST.ASSETS.menuSceneBackground);
        back.setOrigin(0, 0);

        let btn = new Button(this, 408, 404, uiAtlas, CST.ASSETS.btnStart);
        btn.onClick = () => this.actionOnClick();
        this.add.existing(btn);
    }

    actionOnClick() {
        this.scene.start(CST.SCENES.GAME);
    }
}

export default MenuScene; 
