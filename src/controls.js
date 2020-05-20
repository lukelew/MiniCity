import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { DragControls } from 'three/examples/jsm/controls/DragControls';

var orbitControls = new OrbitControls(camera, renderer.domElement)

var UpdateLoop = function () {
    renderer.render(scene, camera);
    orbitControls.update();
    requestAnimationFrame(UpdateLoop)
}
requestAnimationFrame(UpdateLoop)
