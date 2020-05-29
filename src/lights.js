import * as THREE from 'three';
import { scene } from './scene';

var directionLight = new THREE.DirectionalLight(0xffffff, 2)
directionLight.position.x = 80;
directionLight.position.y = 20;
directionLight.castShadow = true;

//var textureLoader = new THREE.TextureLoader();
//var textureFlare0 = textureLoader.load("src/assets/LensFlare.png" );
//var lensflare = new Lensflare();
//lensflare.addElement(new LensflareElement( textureFlare0, 512,0 ));

//directionLight.add( lensflare );
scene.add(directionLight);

var directionLighHelper = new THREE.DirectionalLightHelper(directionLight, 50);
scene.add(directionLighHelper);

var ambientLight = new THREE.AmbientLight(new THREE.Color(1,1,1), 1);
scene.add(ambientLight);
export { directionLight };
export {ambientLight};
