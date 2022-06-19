import * as THREE from 'three'
import Sizes from './Utlis/Sizes.js';
import Time from './Utlis/Time.js';
import Camera from './Camera.js';

let instance = null
export default class Experience {
    constructor(canvas) {
        if (instance){
            return instance
        }
        instance = this

        //Global Access
        window.experience = this

        //Options
        this.canvas = canvas

        //Set Up
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()

        //Sizes resize event
        this.sizes.on('resize', () => {
            this.resize()
        })

        //Time tick event
        this.time.on('tick', () => {
            this.update()
        })

    }

    resize() {
        this.camera.resize()
    }

    update(){

    }
}