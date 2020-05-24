
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'dat.gui';

function init() {
    var scene = new THREE.Scene();
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

    // lights part
    var directionLight = new THREE.DirectionalLight(0xffffff, 2)
    directionLight.position.x = 80;
    directionLight.position.y = 20;
    directionLight.castShadow = true;
    scene.add(directionLight);

    var directionLighHelper = new THREE.DirectionalLightHelper(directionLight, 20);
    scene.add(directionLighHelper);

    var ambientLight = new THREE.AmbientLight(new THREE.Color(1,1,1), 1);
    scene.add(ambientLight);



    // objects part
    var objects = []
    var floorGeometry = new THREE.PlaneGeometry(100, 100, 1,1);
    var floorMaterial = new THREE.MeshLambertMaterial({ color: 0x6666666, side: THREE.DoubleSide });
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    floor.position.y = -0.1;
    floor.receiveShadow = true;
    scene.add(floor);

    var loader = new GLTFLoader();
    loader.load('./src/assets/road.glb', function (gltf) {
      gltf.scene.traverse( function ( node ){
        if (node.isMesh){
          node.castShadow = true;
        }
      });
      gltf.scene.position.y = 1.5;
      scene.add(gltf.scene);
      objects.push(gltf.scene);
    });

    loader.load('./src/assets/houses1.glb', function (gltf) {
      gltf.scene.traverse( function ( node ){
        if (node.isMesh){
          node.castShadow = true;
        }
      });
      gltf.scene.position.y = 1.5;
      scene.add(gltf.scene);
      objects.push(gltf.scene);
      //gltf.scene.
    });


    var boxGeometry = new THREE.BoxGeometry(1,1,1);
    var boxMaterial = new THREE.MeshLambertMaterial({color:0x123456});
    //boxMaterial.color = new THREE.Color(0x123456);
    var box_mesh = new THREE.Mesh(boxGeometry, boxMaterial)
    box_mesh.position.y = 0.5;
    box_mesh.castShadow = true;
    scene.add(box_mesh);
    objects.push(box_mesh);



    // controls part
    var orbitControls = new OrbitControls(camera, renderer.domElement)

    var UpdateLoop = function () {
        renderer.render(scene, camera);
        orbitControls.update();
        requestAnimationFrame(UpdateLoop);
    }
    requestAnimationFrame(UpdateLoop);


    var dragControls = new DragControls(objects, camera, renderer.domElement);
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
