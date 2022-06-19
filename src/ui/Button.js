import Phaser from 'phaser';

const POSTFIX = {
    enabled: '-enabled',
    hover: '-hover',
    down: '-down',
}

export default class Button extends Phaser.GameObjects.Image {
    constructor(scene, x, y, atlas, btnName) {
        super(scene, x, y, atlas, btnName + POSTFIX.enabled);
        this.atlas = atlas;
        this.btnName = btnName;
        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, this.handleUp, this)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, this.handleOut, this)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, this.handleDown, this)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, this.handleOver, this);
    }

    destroy(fromScene) {
        this.atlas = null;
        this.onClickHandler = null;
        super.destroy(fromScene);
    }

    set onClick(onClickHandler) {
        this.onClickHandler = onClickHandler;
    }

    handleUp(pointer) {
        this.handleOver(pointer);
        if (this.onClickHandler) {
            this.onClickHandler();
        }
    }

    handleOut(pointer) {
        this.setTexture(this.atlas, this.btnName + POSTFIX.enabled);
    }

    handleDown(pointer) {
        this.setTexture(this.atlas, this.btnName + POSTFIX.down);
    }

    handleOver(pointer) {
        this.setTexture(this.atlas, this.btnName + POSTFIX.hover);
    }
}