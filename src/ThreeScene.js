import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./three.css";

const Circle = ({ renderer_color, mesh_color }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const scene = new THREE.Scene();
    const geometry = new THREE.SphereGeometry(7, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      emissive: mesh_color,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 2;
    mesh.position.y = 8;
    scene.add(mesh);

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 20;
    scene.add(camera);
    const canvas = circleRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor(renderer_color);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;
    // let mouseX = 0;
    // let mouseY = 0;

    // canvas.addEventListener("mousemove", (event) => {
    //   // Calculate normalized mouse coordinates
    //   mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    //   mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    // });

    // const updateMeshPosition = () => {
    //   // Convert mouse coordinates to world space
    //   const mousePosition = new THREE.Vector3(mouseX, mouseY, 0.5);
    //   mousePosition.unproject(camera);

    //   // Calculate the direction from the camera to the mouse position
    //   const direction = mousePosition.sub(camera.position).normalize();

    //   // Set the new position of the mesh based on the direction
    //   const distance = -camera.position.z / direction.z;
    //   const newPosition = camera.position
    //     .clone()
    //     .add(direction.multiplyScalar(distance));
    //   mesh.position.copy(newPosition);
    // };

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  }, [renderer_color, mesh_color]);

  return <canvas className="webgl" ref={circleRef} />;
};

export const Triangle = ({ renderer_color, mesh_color }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const scene = new THREE.Scene();
    const geometry = new THREE.OctahedronGeometry(7, 0);
    const material = new THREE.MeshPhongMaterial({
      emissive: mesh_color,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 10;
    mesh.position.y = 8;
    scene.add(mesh);

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 20;
    scene.add(camera);
    const canvas = circleRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor(renderer_color);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  }, [renderer_color, mesh_color]);

  return <canvas className="webgl" ref={circleRef} />;
};

export const Square = ({ renderer_color, mesh_color }) => {
  const sqRef = useRef(null);

  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const scene = new THREE.Scene();
    const geometry = new THREE.DodecahedronGeometry(8, 0);
    const material = new THREE.MeshPhongMaterial({
      emissive: mesh_color,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 8;
    mesh.position.y = 6;
    scene.add(mesh);

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 20;
    scene.add(camera);
    const canvas = sqRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor(renderer_color);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  }, [renderer_color, mesh_color]);

  return <canvas className="webgl" ref={sqRef} />;
};

export const Cone = ({ renderer_color, mesh_color }) => {
  const coneRef = useRef(null);

  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const scene = new THREE.Scene();
    const geometry = new THREE.ConeGeometry(10, 10);
    const material = new THREE.MeshPhongMaterial({
      emissive: mesh_color,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 10;
    mesh.position.y = 4;
    scene.add(mesh);

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 20;
    scene.add(camera);
    const canvas = coneRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor(renderer_color);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 7;

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  }, [renderer_color, mesh_color]);

  return <canvas className="webgl" ref={coneRef} />;
};

export default Circle;
