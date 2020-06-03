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
    gltf.scene.position.set(-6.5,6,3.5);
    gltf.scene.name = 'building2'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/biggarden.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-12.48,-0.5,3.5);
    gltf.scene.scale.set(9.0,9.0,9.0);
    gltf.scene.rotateY(Math.PI);
    gltf.scene.name = 'gardenofb2'
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
    gltf.scene.position.set(-20.5, 7,0.5);
    gltf.scene.name = 'building4'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/biggarden.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-14.65,-0.5,0.7);
    gltf.scene.scale.set(9.0,9.0,9.0);
    gltf.scene.name = 'gardenofb4'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/building6.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-18.65, 0.05,-19.1);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(7.0,7.0,7.0);
    gltf.scene.name = 'building6'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/shop.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-18.39, 0.8,-10);
    gltf.scene.scale.set(1.5, 1.5,1.5);
    gltf.scene.name = 'shop'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});

loader.load('./src/assets/hospital.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-5.9, 2.35,-12.8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(6.15, 6.15, 6.15);
    gltf.scene.name = 'hospital'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/redbuilding(withgarden).glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(8.8, 2.65,0.05);
    gltf.scene.rotateY(Math.PI);
    gltf.scene.scale.set(2.5, 2.5, 2.5);
    gltf.scene.name = 'redbuilding'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/floor.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(2.2, 0.5,-8.7);
    gltf.scene.name = 'floor1'
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
    gltf.scene.position.set(3.5,0,-10.5);
    gltf.scene.name = 'housered1.1'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/floor.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(9.1, 0.5,-8.7);
    gltf.scene.name = 'floor2'
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
    gltf.scene.position.set(10.4, 0,-10.5);
    gltf.scene.name = 'housered1.2'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/floorwithwhitebranch.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(12.3, 0.5,-26.5);
    gltf.scene.name = 'floor3'
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
    gltf.scene.position.set(1.5,2,-18.3);
    gltf.scene.rotateY(131.9)
    gltf.scene.name = 'housegrey1.1'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/floorwithwhitebranch.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(19, 0.5,-26.5);
    gltf.scene.name = 'floor4'
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
    gltf.scene.position.set(8.5,2,-18.3);
    gltf.scene.rotateY(131.9)
    gltf.scene.name = 'housegrey1.2'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/small road.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(5.7, 0.5,-11.8);
    gltf.scene.scale.set(2, 1, 1);
    gltf.scene.name = 'smallroad'
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
    gltf.scene.position.set(4.7, 0,-12.8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(2, 2, 2);
    gltf.scene.name = 'flowerbed1.1'
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
    gltf.scene.position.set(11.7, 0,-12.8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(2, 2, 2);
    gltf.scene.name = 'flowerbed1.2'
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
    gltf.scene.position.set(4.7, 0,-15.8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(2, 2, 2);
    gltf.scene.name = 'flowerbed1.1'
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
    gltf.scene.position.set(11.7, 0,-15.8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(2, 2, 2);
    gltf.scene.name = 'flowerbed1.2'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/parking.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-5.7, 0,-20.5);
    gltf.scene.rotateY(130.38);
    gltf.scene.scale.set(1.25, 1.25, 1.25);
    gltf.scene.name = 'parking'
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
});
loader.load('./src/assets/flowerbed.glb', function (gltf) {
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
});
loader.load('./src/assets/flowerbed.glb', function (gltf) {
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
});
loader.load('./src/assets/flowerbed.glb', function (gltf) {
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
});
loader.load('./src/assets/hill.glb', function (gltf) {
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
loader.load('./src/assets/factory.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(16.5,0.35,-12.3);
    gltf.scene.scale.set(0.86, 0.86, 0.86);
    gltf.scene.name = 'factory'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
loader.load('./src/assets/bigfactory.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(18,0,-3.4);
    gltf.scene.scale.set(2.8, 2.8 ,2.8);
    gltf.scene.name = 'bigfactory'
    scene.add(gltf.scene)
    moveableObjects.push(gltf.scene);
});
//road
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(19.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.1'
    scene.add(gltf.scene)
});

loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(16.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.2'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(13.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.3'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(10.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.4'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(7.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.5'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(4.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.6'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(1.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.7'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-1.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.8'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-4.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.9'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-7.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.10'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-10.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.11'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-13.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.12'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-16.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.13'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.14'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-22.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.15'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-25.65,0,-18.8);
    gltf.scene.rotation.set(0, 0.0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad1.16'
    scene.add(gltf.scene)
});
loader.load('./src/assets/small cross.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-16.65,-0.042,-28.88);
    gltf.scene.rotation.set(0, 0, 0);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'small cross1'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,-18);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.1'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,-15);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.2'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,-12);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.3'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,-9);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.4'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,-6);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.5'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,-3);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.6'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,1);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.7'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,4);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.8'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,7);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.9'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,10);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.10'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-19,0,13);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad2.11'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,-18.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.1'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,-15.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.2'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,-12.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.3'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,-9.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.4'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,-6.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.5'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,-3.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.6'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,-0.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.7'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,2.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.8'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,5.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.9'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,8.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.10'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(29.65,0,11.5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'sideroad3.11'
    scene.add(gltf.scene)
});
loader.load('./src/assets/small cross.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-16.65,-0.042,-9.1);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'small cross1'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-24.8,0,1);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'midroad2.1'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-21.8,0,1);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'midroad2.2'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-18.8,0,1);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'midroad2.3'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-15.8,0,1);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'midroad2.4'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-12.8,0,1);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'midroad2.5'
    scene.add(gltf.scene)
});
loader.load('./src/assets/cross.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(-2.88,-0.03,-4.4);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'cross'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(1,0,1);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'midroad2.6'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(4,0,1);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'midroad2.7'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(7,0,1);
    gltf.scene.scale.set(0.7, 1.0, 0.5);
    gltf.scene.name = 'midroad2.8'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(5.3,0,-6.8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.72);
    gltf.scene.name = 'midroad1.1'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(5.3,0,-9.8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.72);
    gltf.scene.name = 'midroad1.2'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(5.3,0,-12.8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.72);
    gltf.scene.name = 'midroad1.3'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(5.3,0,-15.8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.72);
    gltf.scene.name = 'midroad1.4'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(5.3,0,-18.8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.72);
    gltf.scene.name = 'midroad1.5'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(5.375,0,5);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.72);
    gltf.scene.name = 'midroad1.6'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(5.375,0,8);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.72);
    gltf.scene.name = 'midroad1.7'
    scene.add(gltf.scene)
});
loader.load('./src/assets/aRoad.glb', function (gltf) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
        }
    });
    console.log(gltf);
    gltf.scene.position.set(5.375,0,11);
    gltf.scene.rotateY(Math.PI/2);
    gltf.scene.scale.set(0.7, 1.0, 0.72);
    gltf.scene.name = 'midroad1.8'
    scene.add(gltf.scene)
});
export { floor, moveableObjects }
