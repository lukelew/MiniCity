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

var boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
var boxMaterial = new THREE.MeshLambertMaterial({ color: 0x00BFFF, transparent: true });
var box = new THREE.Mesh(boxGeometry, boxMaterial);
box.name = 'box11'
box.position.set(10, 0.5, 0)
box.castShadow = true;
//box.receiveShadow = true;
scene.add(box)
moveableObjects.push(box)

var box2 = box.clone()
box2.name = 'box22'
box2.position.set(20, 0.5, 0)
box2.castShadow = true;
//box2.receiveShadow = true;
scene.add(box2)
moveableObjects.push(box2)

loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.y = 1.5;
    gltf.scene.name = 'House'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});




export { floor, moveableObjects }
