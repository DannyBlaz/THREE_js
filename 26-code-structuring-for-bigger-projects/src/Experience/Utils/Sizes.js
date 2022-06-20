import EventEmitter from "./EventEmitter.js";

export default class Sizes extends EventEmitter {
    constructor() {
        super()

        //Set Up
        this.weight = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        //Resize event
        window.addEventListener('resize', () => {
            this.weight = window.innerWidth
            this.height = window.innerHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
    }
}