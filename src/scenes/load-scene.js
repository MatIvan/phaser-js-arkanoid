import Phaser from "phaser";
import { CST } from '../CST';
import MenuScene from "../scenes/menu-scene";

import logo from '../../assets/logo.png';

class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.LOAD });
    }

    preload() {
        console.log('loading...');

        this.load.image('logo', logo);

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        });

        this.load.on('progress', (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            console.log(percent);
        })

        this.load.on('complete', () => {
            console.log('done');
        })
    }

    create() {
        this.scene.add(CST.SCENES.MENU, MenuScene, false);
        this.scene.start(CST.SCENES.MENU, 'from loadscene');
    }

}

export default LoadScene;
