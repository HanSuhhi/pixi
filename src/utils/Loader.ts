import * as PIXI from 'pixi.js'

class PLoader extends PIXI.Loader {
    public loadImg(data: Array<{ store: Map<string, PIXI.Sprite>, name: string, img: string }>) {
        data.forEach(v => {
            this.add(v.name, v.img)
        })
        return this.load((_, res) =>
            data.forEach(v => {
                v.store.set(v.name, new PIXI.Sprite(res[v.name].texture))
            })
        )
    }
}
export default new PLoader();