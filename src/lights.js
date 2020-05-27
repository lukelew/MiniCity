import * as THREE from 'three';
import { scene } from './scene';

var directionLight = new THREE.DirectionalLight(0xffffff, 2)
directionLight.position.x = 80;
directionLight.position.y = 20;
directionLight.castShadow = true;
scene.add(directionLight);

var directionLighHelper = new THREE.DirectionalLightHelper(directionLight, 20);
scene.add(directionLighHelper);

var ambientLight = new THREE.AmbientLight(new THREE.Color(1,1,1), 1);
scene.add(ambientLight);

export { directionLight, directionLighHelper, ambientLight }