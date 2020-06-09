import * as THREE from 'three';

function car1Mixer(car) {
    var time1 = [0, 5, 15, 20, 25];
    var route = [-3,0.05,10, 24.5,0.05,10, 24.5,0.05,-24.5, -3,0.05,-24.5, -3,0.05,10];
    var time2 = [
        0, 
        4.99999, 5, 
        14.99999, 15, 
        19.99999, 20, 
        24.99999, 25 ]
    var rotation = [
        0, 
        0, 1.57, 
        1.57, 3.14, 
        3.14, -1.57, 
        -1.57, 0]
    var route_Keyframe = new THREE.KeyframeTrack('car1.position', time1, route);
    var rotation_Keyframe = new THREE.KeyframeTrack('car1.rotation[y]', time2, rotation);

    var duration = 25;
    var clip1 = new THREE.AnimationClip('car1', duration, [
        route_Keyframe,
        rotation_Keyframe
    ]);

    var mixer1 = new THREE.AnimationMixer(car);
    var action1 = mixer1.clipAction(clip1);

    action1.setLoop(THREE.LoopRepeat, 'Infinity').play();

    return mixer1
}

function car2Mixer(car) {
    var time1 = [0, 15, 20, 35, 40];
    var route = [-24.5,0.05,-4.05, 24.5,0.05,-4.05, 24.5,0.05,-24.5, -24.5,0.05,-24.5, -24.5,0.05,-4.05];
    var time2 = [
        0,
        14.99999, 15,
        19.99999, 20,
        34.99999, 35,
        39.99999, 40]
    var rotation = [
        0,
        0, 1.57,
        1.57, 3.14,
        3.14, -1.57,
        -1.57, 0]
    var route_Keyframe = new THREE.KeyframeTrack('car2.position', time1, route);
    var rotation_Keyframe = new THREE.KeyframeTrack('car2.rotation[y]', time2, rotation);

    var duration = 40;
    var clip2 = new THREE.AnimationClip('car2', duration, [
        route_Keyframe,
        rotation_Keyframe
    ]);

    var mixer2 = new THREE.AnimationMixer(car);
    var action2 = mixer2.clipAction(clip2);

    action2.setLoop(THREE.LoopRepeat, 'Infinity').play();

    return mixer2
}

export { car1Mixer, car2Mixer }