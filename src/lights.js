import * as THREE from 'three';
import { scene } from './scene';
import { floor } from './objects';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';

var directionLight = new THREE.DirectionalLight(0xffffff, 1)
directionLight.position.x = 80;
directionLight.position.y = 20;
directionLight.castShadow = true;
directionLight.shadow.camera.left = -50;
directionLight.shadow.camera.right = 50;
directionLight.shadow.camera.top = 50
directionLight.shadow.camera.bottom = -50
directionLight.target = floor;
scene.add(directionLight);

var textureLoader = new THREE.TextureLoader();
var textureFlare0 = textureLoader.load( "./src/assets/LensFlare.png");
var lensFlare = new Lensflare();
lensFlare.addElement(new LensflareElement(textureFlare0, 500,0));

directionLight.add(lensFlare);

var ambientLight = new THREE.AmbientLight(new THREE.Color(1,1,1), 1);
scene.add(ambientLight);

export { directionLight, ambientLight, lensFlare };
