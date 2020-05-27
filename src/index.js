
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { scene } from './scene';
import { moveableObjects } from './objects';
import { directionLight, directionLighHelper, ambientLight } from './lights'
import * as dat from 'dat.gui';

function init() {
    var ratio = window.innerWidth/window.innerHeight
    var camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000);
    camera.position.set(0,0,15);
    camera.lookAt(0,0,1);

    var renderer = new THREE.WebGLRenderer({ antialias : true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x97dbf7, 1.0);
    document.body.appendChild(renderer.domElement);

    var gridHelper = new THREE.GridHelper(100, 100, 0x666666, 0x666666);
    scene.add(gridHelper);
    var axes = new THREE.AxesHelper(10);
    scene.add(axes);

    // controls part
    var orbitControls = new OrbitControls(camera, renderer.domElement)

    var UpdateLoop = function () {
        renderer.render(scene, camera);
        orbitControls.update();
        requestAnimationFrame(UpdateLoop);
    }
    requestAnimationFrame(UpdateLoop);

    var dragControls = new DragControls(moveableObjects, camera, renderer.domElement);
    var startColor
    dragControls.addEventListener('dragstart', function (event) {
        orbitControls.enabled = false;
        startColor = event.object.material.color.getHex();
        event.object.material.color.set(0xaaaaaa);
    });

    dragControls.addEventListener('dragend', function (event) {
        orbitControls.enabled = true;
        event.object.material.color.set(startColor)
    });

    // dat.Gui
    var gui = new dat.GUI();
    gui.add(directionLight, 'intensity', -10, 20)
}
init()
