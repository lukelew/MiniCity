import * as THREE from 'three';

var renderer = new THREE.WebGLRenderer({ antialias : true, alpha : true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// renderer.setClearColor(0x97dbf7, 1.0);
renderer.autoClear = false;
document.body.appendChild(renderer.domElement);

export { renderer }