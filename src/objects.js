import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from './scene';

var loader = new GLTFLoader();
var moveableObjects = [];

var floorGeometry = new THREE.PlaneGeometry(100, 100);
var floorMaterial = new THREE.MeshLambertMaterial({ color: 0x999999, side: THREE.DoubleSide});
var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor)

loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.y = 0;
    gltf.scene.name = 'House'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});




export { floor, moveableObjects }
