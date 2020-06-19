import * as THREE from 'three';
import { scene } from './scene';
import { camera } from './camera';
import { renderer } from './renderer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Sky } from 'three/examples/jsm/objects/Sky';
import { floor, moveableObjects} from './objects';
import { directionLight } from './lights';
import * as Stats from 'stats.js';
import * as dat from 'dat.gui';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';


var mouse, raycaster;
var onMovingObject;
var onMovingStatus = false;
var editMode = false;

function init() {

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

    var cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512, { format: THREE.RGBFormat, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
    var cubeCamera = new THREE.CubeCamera(0.1, 1, cubeRenderTarget);

    scene.background = new THREE.Color(0x97dbf7);

    function updateSun() {

        var theta = Math.PI * (parameters.inclination - 0.5);
        var phi = 2 * Math.PI * (parameters.azimuth - 0.5);

        directionLight.position.x = parameters.distance * Math.cos(phi);
        directionLight.position.y = parameters.distance * Math.sin(phi) * Math.sin(theta);
        directionLight.position.z = parameters.distance * Math.sin(phi) * Math.cos(theta);

        sky.material.uniforms['sunPosition'].value = directionLight.position.copy(directionLight.position);

        cubeCamera.update(renderer, sky);

    }

    updateSun();

    // controls part
    var orbitControls = new OrbitControls(camera, renderer.domElement)

    var UpdateLoop = function () {
        stats.begin();
        stats.end();
        renderer.render(scene, camera);
        orbitControls.update();
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

    function render(){
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();

    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize() {
    	camera.aspect = window.innerWidth / window.innerHeight;
    	camera.updateProjectionMatrix();
    	renderer.setSize( window.innerWidth, window.innerHeight );
    }
    create();
}

//terrain//
function create(){
    function funZ(width, height) {
    var size = width * height;
    var data = new Uint8Array(size);
    var perlin = new ImprovedNoise();
    var quality = 0.15;
    var z = 100;
    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < size; i++) {
        var x = i % width;
        var y = ~~(i / width);
        data[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality * 1.75);
        console.log(y);
            }
        quality *= 5;
        }

    return data;

    }
var width =100, height =100;
var data = funZ(width, height);
var geometry = new THREE.PlaneBufferGeometry(57, 77, width - 1, height - 1);
geometry.rotateX(-Math.PI / 2);
var vertices = geometry.attributes.position.array;
// 改变顶点高度值
for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
  vertices[j + 1] = data[i] * 0.8;
}
geometry.computeVertexNormals();

var material = new THREE.MeshLambertMaterial({
  color: 0x3E2E20,
  side: THREE.DoubleSide,
});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(2.600, -1, 17.770);
mesh.rotation.set(23.490, 20.4, 4.7);
mesh.scale.set(0.25, -0.330, -0.200);
scene.add(mesh);
}

//terrain//

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
