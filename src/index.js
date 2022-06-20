import Phaser from "phaser";
import LoadScene from './scenes/load-scene';
import GameScene from './scenes/game-scene';
// import InfoScene from './scenes/info-scene';

const config = {
    type: Phaser.AUTO,
    parent: 'arkanoid',
    width: 800,
    height: 600,
    backgroundColor: '202020',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    antialias: true,
    scene: [
        LoadScene,
        GameScene,
        // InfoScene,
    ],
    physics: {
        default: 'arcade',
        matter: {
            debug: true,
            gravity: { y: 0 }
        }
    },
};

const game = new Phaser.Game(config);
