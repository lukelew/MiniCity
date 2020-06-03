
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { scene } from './scene';
import { floor, moveableObjects } from './objects';
import { directionLight, ambientLight, spotLight } from './lights';
import * as dat from 'dat.gui';

var camera, renderer, mouse, raycaster;
var onMovingObject;
var onMovingStatus = false;
var editMode = false;

function init() {
    var ratio = window.innerWidth/window.innerHeight
    camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 10000);
    camera.position.set(0,10,50);
    camera.lookAt(0,0,1);

    renderer = new THREE.WebGLRenderer({ antialias : true, alpha : true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x97dbf7, 1.0);
    document.body.appendChild(renderer.domElement);

    // controls part
    var orbitControls = new OrbitControls(camera, renderer.domElement)

    var UpdateLoop = function () {
        renderer.render(scene, camera);
        orbitControls.update();
        requestAnimationFrame(UpdateLoop);
    }
    requestAnimationFrame(UpdateLoop);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    document.querySelector('#edit_mode').addEventListener('click', switchEditMode)

    // dat.Gui
    var guiControls = new function(){
        this.color = directionLight.color.getStyle();
        this.positionx = 0;
    };

    var gui = new dat.GUI();
    gui.add(directionLight, 'intensity', -10, 20);
    gui.add(guiControls, 'positionx', -5, 5);
    gui.addColor(guiControls, 'color').onChange(function (e){directionLight.color.setStyle(e);});
    render();
    function render(){
        directionLight.position.x += guiControls.positionx;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	orbitControls.handleResize();
}


function mouseDownToSelectObj(e) {
    e.preventDefault();
    if(!onMovingStatus){
        mouse.set((e.clientX / window.innerWidth) * 2 - 1, - (e.clientY / window.innerHeight) * 2 + 1);
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(moveableObjects, true);
        console.log(moveableObjects);
        if (intersects.length > 0) {
            var intersect = intersects[0];
            if (intersect.object.parent.type != "Scene"){
                onMovingObject = intersect.object.parent.parent.clone()
                scene.remove(intersect.object.parent.parent)
                moveableObjects.splice(moveableObjects.indexOf(intersect.object.parent.parent), 1)
            }
            else{
                onMovingObject = intersect.object.clone()
                scene.remove(intersect.object)
                moveableObjects.splice(moveableObjects.indexOf(intersect.object), 1)
            }
            scene.add(onMovingObject)
            moveableObjects.push(onMovingObject)
            document.addEventListener('mousemove', movingObject, false);
            onMovingStatus = true

        }
    }
    else{
        document.removeEventListener('mousemove', movingObject, false);
        onMovingStatus = false
    }

}

function movingObject(e) {
    e.preventDefault();
    mouse.set((e.clientX / window.innerWidth) * 2 - 1, - (e.clientY / window.innerHeight) * 2 + 1);
    raycaster.setFromCamera(mouse, camera);
    var intersect = raycaster.intersectObject(floor)
    if (intersect.length > 0 ) {
        var movedToPoint = intersect[0].point
        movedToPoint.y = Math.abs(movedToPoint.y)
        onMovingObject.position.copy(movedToPoint).add(intersect[0].face.normal);
        onMovingObject.position.divideScalar(1).floor().multiplyScalar(1).addScalar(0.5);

        renderer.render(scene, camera);
    }

}


// enter and exit editting mode
function switchEditMode() {
    if (!editMode) {
        var gridHelper = new THREE.GridHelper(50, 50, 0xf27878, 0x3cd7d9);
        gridHelper.name = 'gridHelper';
        gridHelper.position.y = 0.1;
        scene.add(gridHelper);
        document.addEventListener('mousedown', mouseDownToSelectObj, false);
        document.querySelector('#edit_mode em').innerHTML = 'Exit'
        editMode = true
    }
    else{
        var selectedObj = scene.getObjectByName('gridHelper')
        scene.remove(selectedObj)
        document.removeEventListener('mousedown', mouseDownToSelectObj, false);
        document.querySelector('#edit_mode em').innerHTML = 'Edit Mode'
        editMode = false
    }

}
var playbutton = document.querySelector('#bgm_play')
var audio = document.querySelector('#bgm audio')
// bgm controls
playbutton.addEventListener('click', switchBgm)
function switchBgm() {
    if (audio.paused){
        audio.play()
        document.querySelector('#bgm_play em').innerHTML = "Pause"
    }
    else{
        audio.pause()
        document.querySelector('#bgm_play em').innerHTML = "BGM"
    }
}
init()
