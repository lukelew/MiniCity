import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from './scene';

var loader = new GLTFLoader();
var moveableObjects = [];

var floorGeometry = new THREE.PlaneGeometry(50, 50);
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
    gltf.scene.position.x = 0;
    gltf.scene.position.z = 20;
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
    gltf.scene.position.x = 8;
    gltf.scene.position.z = 20;
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
    gltf.scene.position.x = 17;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 20;
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
    gltf.scene.position.x = 22;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 20;
    gltf.scene.name = 'House1.4'
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
    gltf.scene.position.set(-2.0,2.0,14);
    gltf.scene.name = 'Houses3.1'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/cross.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x = 3;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 16.5;
    scene.add(gltf.scene);
});
loader.load('./src/assets/cross.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x = 12;
    gltf.scene.position.y = 0;
    gltf.scene.position.z = 16.5;
    gltf.scene.name = 'Cross'
    scene.add(gltf.scene);
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x = 17;
    gltf.scene.position.y = 0.1;
    gltf.scene.position.z = 27.3;
    gltf.scene.name = 'aRoad'
    scene.add(gltf.scene);
});

loader.load('./src/assets/building2.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.x = 8;
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
    gltf.scene.position.x = 0;
    gltf.scene.position.y = 7;
    gltf.scene.name = 'building4'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/flowerbed.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(18.7,-0.2,24.0);
    gltf.scene.scale.set(2.0,2.0,2.0);
    gltf.scene.name = 'flowerbed1'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});loader.load('./src/assets/flowerbed.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(24.0,-0.2,24.0);
    gltf.scene.scale.set(2.0,2.0,2.0);
    gltf.scene.name = 'flowerbed2'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});loader.load('./src/assets/flowerbed.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(10.0,-0.2,24.0);
    gltf.scene.scale.set(2.0,2.0,2.0);
    gltf.scene.name = 'flowerbed3'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});loader.load('./src/assets/flowerbed.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-4.0,-0.2,24.0);
    gltf.scene.scale.set(2.0,2.0,2.0);
    gltf.scene.name = 'flowerbed4'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});loader.load('./src/assets/hill.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(0.0,0,17.5);
    gltf.scene.rotation.set(3.14, 0.0, 3.14);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'hill'
    scene.add(gltf.scene)
});
export { floor, moveableObjects }
