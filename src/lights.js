import * as THREE from 'three';
import { scene } from './scene';
import { floor, moveableObjects } from './objects';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';

var directionLight = new THREE.DirectionalLight(0xffffff, 2)
directionLight.position.x = 80;
directionLight.position.y = 20;
directionLight.castShadow = true;
directionLight.distance = 0;
directionLight.shadow.mapSize.width = 2048;
directionLight.shadow.mapSize.height = 2048;
directionLight.shadow.camera.left = -32;
directionLight.shadow.camera.right = 32;
directionLight.target = floor;
scene.add(directionLight);

var spotLight = new THREE.SpotLight(0xccccc, 0.3);
spotLight.position.set(80,20);
spotLight.target = floor;
scene.add(spotLight);

var textureLoader = new THREE.TextureLoader();
var textureFlare0 = textureLoader.load( "./src/assets/LensFlare.png");
var lensFlare = new Lensflare();
lensFlare.addElement(new LensflareElement(textureFlare0, 500,0));

directionLight.add(lensFlare);



var directionLighHelper = new THREE.DirectionalLightHelper(directionLight, 50);
scene.add(directionLighHelper);

var ambientLight = new THREE.AmbientLight(new THREE.Color(1,1,1), 1);
scene.add(ambientLight);

export { directionLight };
export { ambientLight };
//export { lensFlare }
export { spotLight };
