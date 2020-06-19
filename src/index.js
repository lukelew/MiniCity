import * as THREE from 'three';
import { scene } from './scene';
import { camera } from './camera';
import { renderer } from './renderer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Sky } from 'three/examples/jsm/objects/Sky';
import { Ocean } from 'three/examples/jsm/misc/Ocean';
import { floor, moveableObjects, car1Animation, car2Animation} from './objects';
import { directionLight } from './lights';
import * as Stats from 'stats.js';
import * as dat from 'dat.gui';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';


var mouse, raycaster;
var onMovingObject;
var body = document.querySelector('body');
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

    function updateSun() {

        var theta = Math.PI * (parameters.inclination - 0.5);
        var phi = 2 * Math.PI * (parameters.azimuth - 0.5);

        directionLight.position.x = parameters.distance * Math.cos(phi);
        directionLight.position.y = parameters.distance * Math.sin(phi) * Math.sin(theta);
        directionLight.position.z = parameters.distance * Math.sin(phi) * Math.cos(theta);

        if (parameters.inclination > 0.5) {
            body.className = 'dark'
            directionLight.visible = false;
        }
        else if (parameters.inclination > 0.35 && parameters.inclination < 0.5) {
            body.className = 'twilight'
            directionLight.visible = true
        }
        else {
            body.className = 'daylight'
        }
    }

    // add ocean as a lake
    // var ocean = new Ocean(renderer, camera, scene,
    //     {
    //         USE_HALF_FLOAT: false,
    //         INITIAL_SIZE: 3000,
    //         INITIAL_WIND: [10.0, 10.0],
    //         INITIAL_CHOPPINESS: 1.5,
    //         CLEAR_COLOR: [1.0, 1.0, 1.0, 0.0],
    //         GEOMETRY_ORIGIN: [100, 200],
    //         SUN_DIRECTION: [- 1.0, 1.0, 1.0],
    //         OCEAN_COLOR: new THREE.Vector3(0.004, 0.016, 0.047),
    //         SKY_COLOR: new THREE.Vector3(3.2, 9.6, 12.8),
    //         EXPOSURE: 0.35,
    //         GEOMETRY_RESOLUTION: 512,
    //         GEOMETRY_SIZE: 10,
    //         RESOLUTION: 512
    //     })
    // ocean.materialOcean.uniforms["u_projectionMatrix"] = { value: camera.projectionMatrix };
    // ocean.materialOcean.uniforms["u_viewMatrix"] = { value: camera.matrixWorldInverse };
    // ocean.materialOcean.uniforms["u_cameraPosition"] = { value: camera.position};
    // scene.add(ocean.oceanMesh);

    // var lastTime = (new Date()).getTime();
    // function updateOcean() {

    //     var currentTime = new Date().getTime();
    //     ocean.deltaTime = (currentTime - lastTime) / 1000 || 0.0;
    //     lastTime = currentTime;
    //     ocean.render(ocean.deltaTime);
    //     ocean.overrideMaterial = ocean.materialOcean;

    //     if (ocean.changed) {

    //         ocean.materialOcean.uniforms["u_size"].value = ocean.size;
    //         ocean.materialOcean.uniforms["u_sunDirection"].value.set(ocean.sunDirectionX, ocean.sunDirectionY, ocean.sunDirectionZ);
    //         ocean.materialOcean.uniforms["u_exposure"].value = ocean.exposure;
    //         ocean.changed = false;

    //     }

    //     ocean.materialOcean.uniforms["u_normalMap"].value = ocean.normalMapFramebuffer.texture;
    //     ocean.materialOcean.uniforms["u_displacementMap"].value = ocean.displacementMapFramebuffer.texture;
    //     ocean.materialOcean.uniforms["u_projectionMatrix"].value = camera.projectionMatrix;
    //     ocean.materialOcean.uniforms["u_viewMatrix"].value = camera.matrixWorldInverse;
    //     ocean.materialOcean.uniforms["u_cameraPosition"].value = camera.position
    //     ocean.materialOcean.depthTest = true;
    //     renderer.render(scene, camera);
    // }

    // controls part
    var orbitControls = new OrbitControls(camera, renderer.domElement)
    var clock1 = new THREE.Clock();
    var clock2 = new THREE.Clock();

    var UpdateLoop = function () {
        stats.begin();
        stats.end();
        renderer.render(scene, camera);
        orbitControls.update();
        // updateOcean()
        requestAnimationFrame(UpdateLoop);
        car1Animation.update(clock1.getDelta())
        car2Animation.update(clock2.getDelta())
    }
    requestAnimationFrame(UpdateLoop);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    document.querySelector('#edit_mode').addEventListener('click', switchEditMode)

    // dat.Gui
    var gui = new dat.GUI();
    var folder = gui.addFolder('DirectionalLight');
    folder.add(directionLight, 'intensity', -10, 10);
    folder.open();

    var folder = gui.addFolder('Sky');
    folder.add(parameters, 'inclination', 0, 0.6, 0.0001).onChange(updateSun);
    folder.add(parameters, 'azimuth', 0, 1, 0.0001).onChange(updateSun);
    folder.open();

    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize() {
    	camera.aspect = window.innerWidth / window.innerHeight;
    	camera.updateProjectionMatrix();
    	renderer.setSize( window.innerWidth, window.innerHeight );
    }

    createTerrain();

    console.log(moveableObjects);
}

//terrain//
function createTerrain(){
    function funZ(width, height) {
    var size = width * height;
    var data = new Uint8Array(size);
    var perlin = new ImprovedNoise();
  // 控制地面显示效果  可以尝试0.01  0.1  1等不值
  // 0.1凹凸不平的地面效果  1山脉地形效果
    var quality = 0.15;
  // z值不同每次执行随机出来的地形效果不同
    var z = 100;
    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < size; i++) {
      // x的值0 1 2 3 4 5 6...
        var x = i % width;
      // ~表示按位取反 两个~就是按位取反后再取反
      // ~~相当于Math.floor(),效率高一点
      // y重复若干个值
        var y = ~~(i / width);
      // 通过噪声生成数据
        data[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality * 1.75);
        console.log(y);
            }

        return data;

    }
var width =100, height =100;
// 生成地形顶点高度数据
var data = funZ(width, height);
//创建一个平面地形，行列两个方向顶点数据分别为width，height
var geometry = new THREE.PlaneBufferGeometry(57, 77, width - 1, height - 1);
geometry.rotateX(-Math.PI / 2);
// 访问几何体的顶点位置坐标数据
var vertices = geometry.attributes.position.array;
// 改变顶点高度值
for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
  vertices[j + 1] = data[i] * 0.8;
}
// 不执行computeVertexNormals，没有顶点法向量数据
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
