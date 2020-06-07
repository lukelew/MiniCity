import * as THREE from 'three';
var ratio = window.innerWidth/window.innerHeight
var camera = new THREE.PerspectiveCamera(55, ratio, 1, 20000);
    camera.position.set(30,30,100);
    camera.lookAt(0,0,1);

export { camera }