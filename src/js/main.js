// creating a scence and a camera to view it
var scene = new THREE.Scene();

var fieldOfView = 75;
var aspectRatio = window.innerWidth / window.innerHeight;

var nearPlance = 0.1;
var farPlane = 1000;

var camera = new THREE.PerspectiveCamera(
    fieldOfView, aspectRatio , nearPlance, farPlane );

camera.position.z = 5;


// Create the canvas with a renderer and tell the
// renderer to clean up jagged aliased lines
var renderer = new THREE.WebGLRenderer({antialias: true});

// Specify the size of the canvas
renderer.setSize( window.innerWidth, window.innerHeight );

// Add the canvas to the DOM
document.body.appendChild( renderer.domElement );
