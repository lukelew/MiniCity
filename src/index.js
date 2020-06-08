import * as THREE from 'three';
import { scene } from './scene';
import { camera } from './camera';
import { renderer } from './renderer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Sky } from 'three/examples/jsm/objects/Sky';
import { Ocean } from 'three/examples/jsm/misc/Ocean';
import { floor, moveableObjects} from './objects';
import { directionLight } from './lights';
import * as Stats from 'stats.js';
import * as dat from 'dat.gui';

var mouse, raycaster;
var onMovingObject;
var onMovingStatus = false;
var editMode = false;

function init() {

    // add sky and the simulation of sun
    var sky = new Sky();
    var uniforms = sky.material.uniforms;

    uniforms['turbidity'].value = 10;
    uniforms['rayleigh'].value = 2;
    uniforms['luminance'].value = 1;
    uniforms['mieCoefficient'].value = 0.005;
    uniforms['mieDirectionalG'].value = 0.8;

    var parameters = {
        distance: 400,
        inclination: 0.49,
        azimuth: 0.205
    };

    scene.background = new THREE.Color(0x97dbf7);

    function updateSun() {

        var theta = Math.PI * (parameters.inclination - 0.5);
        var phi = 2 * Math.PI * (parameters.azimuth - 0.5);

        directionLight.position.x = parameters.distance * Math.cos(phi);
        directionLight.position.y = parameters.distance * Math.sin(phi) * Math.sin(theta);
        directionLight.position.z = parameters.distance * Math.sin(phi) * Math.cos(theta);


    }

    // add ocean as a lake
    var ocean = new Ocean(renderer, camera, scene, 
        {
            USE_HALF_FLOAT: false,
            INITIAL_SIZE: 3000,
            INITIAL_WIND: [10.0, 10.0],
            INITIAL_CHOPPINESS: 1.5,
            CLEAR_COLOR: [1.0, 1.0, 1.0, 0.0],
            GEOMETRY_ORIGIN: [100, 200],
            SUN_DIRECTION: [- 1.0, 1.0, 1.0],
            OCEAN_COLOR: new THREE.Vector3(0.004, 0.016, 0.047),
            SKY_COLOR: new THREE.Vector3(3.2, 9.6, 12.8),
            EXPOSURE: 0.35,
            GEOMETRY_RESOLUTION: 512,
            GEOMETRY_SIZE: 10,
            RESOLUTION: 512
        })
    ocean.materialOcean.uniforms["u_projectionMatrix"] = { value: camera.projectionMatrix };
    ocean.materialOcean.uniforms["u_viewMatrix"] = { value: camera.matrixWorldInverse };
    ocean.materialOcean.uniforms["u_cameraPosition"] = { value: camera.position};
    scene.add(ocean.oceanMesh);

    var lastTime = (new Date()).getTime();
    function updateOcean() {

        var currentTime = new Date().getTime();
        ocean.deltaTime = (currentTime - lastTime) / 1000 || 0.0;
        lastTime = currentTime;
        ocean.render(ocean.deltaTime);
        ocean.overrideMaterial = ocean.materialOcean;

        if (ocean.changed) {

            ocean.materialOcean.uniforms["u_size"].value = ocean.size;
            ocean.materialOcean.uniforms["u_sunDirection"].value.set(ocean.sunDirectionX, ocean.sunDirectionY, ocean.sunDirectionZ);
            ocean.materialOcean.uniforms["u_exposure"].value = ocean.exposure;
            ocean.changed = false;

        }

        ocean.materialOcean.uniforms["u_normalMap"].value = ocean.normalMapFramebuffer.texture;
        ocean.materialOcean.uniforms["u_displacementMap"].value = ocean.displacementMapFramebuffer.texture;
        ocean.materialOcean.uniforms["u_projectionMatrix"].value = camera.projectionMatrix;
        ocean.materialOcean.uniforms["u_viewMatrix"].value = camera.matrixWorldInverse;
        ocean.materialOcean.uniforms["u_cameraPosition"].value = camera.position
        ocean.materialOcean.depthTest = true;
        renderer.render(scene, camera);
    }

    // controls part
    var orbitControls = new OrbitControls(camera, renderer.domElement)

    var UpdateLoop = function () {
        stats.begin();
        stats.end();
        renderer.render(scene, camera);
        orbitControls.update();
        updateOcean()
        requestAnimationFrame(UpdateLoop);
    }
    requestAnimationFrame(UpdateLoop);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    document.querySelector('#edit_mode').addEventListener('click', switchEditMode)

    // dat.Gui
    var gui = new dat.GUI();
    gui.add(directionLight, 'intensity', -10, 20);
    
    var folder = gui.addFolder('Sky');
    folder.add(parameters, 'inclination', 0, 0.5, 0.0001).onChange(updateSun);
    folder.add(parameters, 'azimuth', 0, 1, 0.0001).onChange(updateSun);
    folder.open();

    gui.add(ocean, "size", 100, 5000).onChange(function (v) {

        this.object.size = v;
        this.object.changed = true;

    });

    gui.add(ocean, "choppiness", 0.1, 4).onChange(function (v) {

        this.object.choppiness = v;
        this.object.changed = true;

    });

    gui.add(ocean, "windX", - 15, 15).onChange(function (v) {

        this.object.windX = v;
        this.object.changed = true;

    });

    gui.add(ocean, "windY", - 15, 15).onChange(function (v) {

        this.object.windY = v;
        this.object.changed = true;

    });

    gui.add(ocean, "sunDirectionX", - 1.0, 1.0).onChange(function (v) {

        this.object.sunDirectionX = v;
        this.object.changed = true;

    });

    gui.add(ocean, "sunDirectionY", - 1.0, 1.0).onChange(function (v) {

        this.object.sunDirectionY = v;
        this.object.changed = true;

    });

    gui.add(ocean, "sunDirectionZ", - 1.0, 1.0).onChange(function (v) {

        this.object.sunDirectionZ = v;
        this.object.changed = true;

    });

    gui.add(ocean, "exposure", 0.0, 0.5).onChange(function (v) {

        this.object.exposure = v;
        this.object.changed = true;

    });

    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize() {
    	camera.aspect = window.innerWidth / window.innerHeight;
    	camera.updateProjectionMatrix();
    	renderer.setSize( window.innerWidth, window.innerHeight );
    }

}



function mouseDownToSelectObj(e) {
    e.preventDefault();
    if(!onMovingStatus){
        mouse.set((e.clientX / window.innerWidth) * 2 - 1, - (e.clientY / window.innerHeight) * 2 + 1);
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(moveableObjects, true);
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
        onMovingObject.position.divideScalar(1).floor().multiplyScalar(1).addScalar(0);
        renderer.render(scene, camera);
    }

}

// stats config
var stats = new Stats();
stats.showPanel(0);
document.querySelector('#stats').appendChild(stats.dom);

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

// bgm controls
var playbutton = document.querySelector('#bgm_play')
var audio = document.querySelector('#bgm audio')
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
