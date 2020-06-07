import * as THREE from 'three';
var ratio = window.innerWidth/window.innerHeight
var camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 10000);
    camera.position.set(0,10,50);
    camera.lookAt(0,0,1);

export { camera }