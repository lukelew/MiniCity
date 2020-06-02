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
box.position.set(0, 0.5, 45)
box.castShadow = true;
//box.receiveShadow = true;
scene.add(box)
moveableObjects.push(box)

var box2 = box.clone()
box2.name = 'box22'
box2.position.set(0, 0.5, -45)
box2.castShadow = true;
//box2.receiveShadow = true;
scene.add(box2)
moveableObjects.push(box2)

var box3 = box.clone()
box3.name = 'box22'
box3.position.set(0, 0.5, 0)
box3.castShadow = true;
//box3.receiveShadow = true;
scene.add(box3)
moveableObjects.push(box3)

var box4 = box.clone()
box4.name = 'box22'
box4.position.set(45, 0.5, 0)
box4.castShadow = true;
//box4.receiveShadow = true;
scene.add(box4)
moveableObjects.push(box4)

var box5 = box.clone()
box5.name = 'box22'
box5.position.set(-45, 0.5, 0)
box5.castShadow = true;
//box5.receiveShadow = true;
scene.add(box5)
moveableObjects.push(box5)

loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
        node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.y = 0;
    gltf.scene.position.x = 45;
    gltf.scene.position.z = 42;
    gltf.scene.name = 'House1.1'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});

loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x = 40;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 42;
    gltf.scene.name = 'House1.2'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});

loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x = 35;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 42;
    gltf.scene.name = 'House1.3'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x = 30;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 42;
    gltf.scene.name = 'House1.4'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x =28;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 32;
    gltf.scene.rotateY(Math.PI);
    gltf.scene.name = 'House2.1'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x =33;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 32;
    gltf.scene.rotateY(Math.PI);
    gltf.scene.name = 'House2.2'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x =38;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 32;
    gltf.scene.rotateY(Math.PI);
    gltf.scene.name = 'House2.3'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/house.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x =43;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 32;
    gltf.scene.rotateY(Math.PI);
    gltf.scene.name = 'House2.4'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/houses3.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x =43;
    gltf.scene.position.y = 2;
    gltf.scene.position.z = 18;
    gltf.scene.name = 'Houses3.1'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});

loader.load('./src/assets/building1.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x = 40;
    gltf.scene.position.y = 0;
    gltf.scene.name = 'building1'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/building2.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x = 30;
    gltf.scene.position.y = 6;
    gltf.scene.name = 'building2'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});

loader.load('./src/assets/building4.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x = -20;
    gltf.scene.position.y = 0;
    gltf.scene.name = 'building4'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
export { floor, moveableObjects }
