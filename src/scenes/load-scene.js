import Phaser from "phaser";
import { CST } from '../CST';
import MenuScene from "../scenes/menu-scene";

import menuSceneBackground from '../../assets/menu-scene-background.png';
import gameSceneBackground from '../../assets/game-scene-background.png';
import uiAtlasPng from '../../assets/uiAtlas.png';
import uiAtlasJson from '../../assets/uiAtlas.json';
import gameAtlasPng from '../../assets/gameAtlas.png';
import gameAtlasJson from '../../assets/gameAtlas.json';

class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.LOAD });
    }

    loadAssets() {
        this.load.image(CST.ASSETS.menuSceneBackground, menuSceneBackground);
        this.load.image(CST.ASSETS.gameSceneBackground, gameSceneBackground);
        this.load.atlas(CST.ASSETS.uiAtlas, uiAtlasPng, uiAtlasJson);
        this.load.atlas(CST.ASSETS.gameAtlas, gameAtlasPng, gameAtlasJson);
    }

    preload() {
        console.log('loading...');

        this.loadAssets();

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
