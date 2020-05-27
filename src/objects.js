import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from './scene';

var floorGeometry = new THREE.PlaneGeometry(100, 100, 1, 1);
var floorMaterial = new THREE.MeshLambertMaterial({ color: 0x666666, side: THREE.DoubleSide });
var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
floor.position.y = -0.1;
floor.receiveShadow = true;
scene.add(floor)

var loader = new GLTFLoader();
var moveableObjects = [];
loader.load('./src/assets/road.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    gltf.scene.position.y = 1.5;
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});

loader.load('./src/assets/road.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    gltf.scene.position.x = 15;
    gltf.scene.position.y = 1.5;
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});

loader.load('./src/assets/houses1.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    gltf.scene.position.x = 6;
    gltf.scene.position.y = 1;
    scene.add(gltf.scene);
    moveableObjects.push(gltf.scene);
});

loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    gltf.scene.position.x = -2;
    gltf.scene.position.y = 1;
    scene.add(gltf.scene);
    moveableObjects.push(gltf.scene);
});


export { moveableObjects }