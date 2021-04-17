import * as PIXI from 'pixi.js'

// export const SpriteStore: Map<string, PIXI.Sprite> = new Map();

class SpriteStore {
    public stores = {
        base: this.base,
        test: this.test
    }
    constructor(
        private base: Map<string, PIXI.Sprite> = new Map(),
        private test: Map<string, PIXI.Sprite> = new Map(),
    ) { }
}

export default new SpriteStore()