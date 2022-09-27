const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();
loader.load(
    '../img/fondoprograme.jpg', function(texture){
        scene.background = texture;
    }
)

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

//Rombo1
const geometry = new THREE.OctahedronGeometry( 6, 0);
const material = new THREE.MeshStandardMaterial();
const octahedron = new THREE.Mesh( geometry, material );
material.metalness = 0.9;
material.roughness = 0.5;
const directionalLight = new THREE.DirectionalLight(0xF25555, 4)
scene.add (directionalLight)
scene.add( octahedron );

//Rombo2
const geometry1 = new THREE.OctahedronGeometry( 6, 0);
const material1 = new THREE.MeshStandardMaterial();
const octahedron1 = new THREE.Mesh( geometry1, material1 );
material1.metalness = 0.9;
material1.roughness = 0.5;
const directionalLight1 = new THREE.DirectionalLight(0xF25555, 4)
scene.add (directionalLight1)
scene.add( octahedron1 );

//Rombo3
const geometry2 = new THREE.OctahedronGeometry( 6, 0);
const material2 = new THREE.MeshStandardMaterial();
const octahedron2 = new THREE.Mesh( geometry2, material2 );
material2.metalness = 0.9;
material2.roughness = 0.5;
const directionalLight2 = new THREE.DirectionalLight(0xF25555, 4)
scene.add (directionalLight2)
scene.add( octahedron2 );

//Rombo4
const geometry3 = new THREE.OctahedronGeometry( 6, 0);
const material3 = new THREE.MeshStandardMaterial();
const octahedron3 = new THREE.Mesh( geometry3, material3 );
material3.metalness = 0.9;
material3.roughness = 0.5;
const directionalLight3 = new THREE.DirectionalLight(0xF25555, 4)
scene.add (directionalLight3)
scene.add( octahedron3 );


controlsRombo = new THREE.DragControls([octahedron, octahedron1, octahedron2, octahedron3],camera, renderer.domElement)

//GLTF MODELO1
const gltfloader = new THREE.GLTFLoader();
const light = new THREE.AmbientLight(0xffffff, 2);
scene.add( light );
gltfloader.load('../assets/moto/scene.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(10, 10, 10)
    scene.add(loaderObjeto);
    console.log('carga completa');
    loaderObjeto.position.x = 7;
    loaderObjeto.position.y = -10;
    controls = new THREE.DragControls([loaderObjeto],camera, renderer.domElement)
}, ()=>{
    
    console.log('cargando')
}, ()=>{
    console.log('error')
},
);
//GLTF MODELO1
const gltfloader1 = new THREE.GLTFLoader();
const light1 = new THREE.AmbientLight( 0xffffff, 2);
scene.add( light1 );
gltfloader1.load('../assets/personaje/scene.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(7, 7, 7)
    scene.add(loaderObjeto);
    console.log('carga completa');
    loaderObjeto.position.x = -32;
    loaderObjeto.position.y = -10;
    controls = new THREE.DragControls([loaderObjeto],camera, renderer.domElement)
}, ()=>{
    
    console.log('cargando')
}, ()=>{
    console.log('error')
},
);

octahedron.position.x = -6;
octahedron.position.y = 25;
octahedron1.position.x = 12;
octahedron1.position.y = -22;
octahedron2.position.y = 10;
octahedron2.position.x = -45;
octahedron3.position.y = 25;
octahedron3.position.x = 42;

camera.position.z = 35
function animate(){
    requestAnimationFrame(animate);
    octahedron.rotation.x += 0.005;
    octahedron.rotation.y += 0.005;
    octahedron1.rotation.x += 0.005;
    octahedron1.rotation.y += 0.005;
    octahedron2.rotation.y += 0.005;
    octahedron2.rotation.x += 0.005;
    octahedron3.rotation.y += 0.005;
    octahedron3.rotation.x += 0.005;
    renderer.render(scene, camera)
}
animate();
