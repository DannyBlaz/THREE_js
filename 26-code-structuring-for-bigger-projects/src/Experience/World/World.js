import Experience from '../Experience.js'
import Enviroment from './Enviroment.js';
import Floor from './Floor'
import Fox from './fox'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        //Wait for the resources
        this.resources.on('ready', () => {
            //Set up
            this.floor = new Floor()
            this.fox = new Fox()
            this.environment = new Enviroment()
        })
    }
    update() {
        if (this.fox) {
            this.fox.update()
        }
    }
}