// creating a scence and a camera to view it
var scene = new THREE.Scene();

var fieldOfView = 75;
var aspectRatio = window.innerWidth / window.innerHeight;

var nearPlance = 0.1;
var farPlane = 1000;

var camera = new THREE.PerspectiveCamera(
    fieldOfView, aspectRatio , nearPlance, farPlane );

camera.position.z = 5;

// appending contents to dom  /////////////////////////////////////////////////

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// adding texture /////////////////////////////////////////////////////////////
var loader = new THREE.TextureLoader();
var url = 'https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg';
var material = new THREE.MeshLambertMaterial({
    map: loader.load(url)
});


// adding geomtry //////////////////////////////////////////////////////////////
var geometry = new THREE.PlaneGeometry(10, 10*.75);
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(100,0,0)
scene.add(mesh);


// adding light ///////////////////////////////////////////////////////////////
var light = new THREE.PointLight(0xffffff, .7, 0);
light.position.set(1, 1, 100);

scene.add(light)



renderer.render(scene, camera);
