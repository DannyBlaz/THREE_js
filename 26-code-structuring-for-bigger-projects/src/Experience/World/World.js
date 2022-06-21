import Experience from '../Experience.js'
import * as THREE from 'three'
import Enviroment from './Enviroment.js';

export default class World{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        //Test Mesh
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )
        this.scene.add(testMesh)

        //Wait for the resources
        this.resources.on('ready', () =>{
            //Set up
            this.environment = new Enviroment()
        })
    }
}