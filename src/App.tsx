import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Profile from './Profile';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import './App.css';
import * as THREE from "three";
import { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Appコンポーネント
function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const animatedTextsRef = useRef<HTMLElement[]>([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    // THREE.js のセットアップ
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const scene = new THREE.Scene();6
    const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 500);
    camera.position.set(-28, 5, 20);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current || undefined,
      antialias: true,
      alpha: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // OrbitControls の設定
    controlsRef.current = new OrbitControls(camera, renderer.domElement);
    if (controlsRef.current) {
      controlsRef.current.enableDamping = true;
      controlsRef.current.dampingFactor = 0.25;
      controlsRef.current.enableZoom = true;
      controlsRef.current.enablePan = true;
      controlsRef.current.enableRotate = true;
    }

    // 3Dモデルのインポート
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("./models/shiba.gltf", (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.4, 0.4, 0.5);
      model.rotation.y = -Math.PI / 4.0;
      scene.add(model);

      mixerRef.current = new THREE.AnimationMixer(model);
      const clips = gltf.animations;
      clips.forEach((clip) => {
        const action = mixerRef.current?.clipAction(clip);
        if (action) action.play();
      });

      // ライト
      const ambientLight = new THREE.AmbientLight(0xffffff, 4);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 2);
      scene.add(pointLight);
    });

    // アニメーション
    const tick = () => {
      renderer.render(scene, camera);
      if (mixerRef.current) {
        mixerRef.current.update(0.1);
      }
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      requestAnimationFrame(tick);
    };
    tick();

    // スクロールでのフェードインアニメーション
    const fadeInElements = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    // ランダムテキストアニメーション
    const animateText = () => {
      const elements = document.querySelectorAll('.animated-text');
      animatedTextsRef.current = Array.from(elements) as HTMLElement[];

      animatedTextsRef.current.forEach(element => {
        const animationDuration = Math.random() * 2 + 2; // 2〜4秒
        const animationDelay = Math.random() * 2; // 0〜2秒
        const translateX = Math.random() * 100 - 50; // -50px 〜 50px
        const translateY = Math.random() * 100 - 50; // -50px 〜 50px
        const rotate = Math.random() * 360; // 0°〜360°

        element.style.animation = `moveText ${animationDuration}s ease-in-out ${animationDelay}s infinite`;
        element.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
      });
    };

    // 初期化
    fadeInElements();
    animateText();

    // オーバーレイのアニメーション完了後に非表示にする
    const overlayElement = document.querySelector('.fullscreen-overlay');
    if (overlayElement) {
      overlayElement.addEventListener('animationend', () => {
        setIsOverlayVisible(false);
      });
    }

    window.addEventListener('scroll', () => {
      fadeInElements();
      animateText();
    });

    return () => {
      window.removeEventListener('scroll', fadeInElements);
      window.removeEventListener('scroll', animateText);
    };
  }, []);

  return (
    <>
      <Router>
        <header>
          <h1>私のホームページ</h1>
          <nav>
            <ul>
              <li><Link to="/home">ホーム</Link></li>
              <li><Link to="/">プロフィール</Link></li>
              <li><Link to="/about">コンテンツ</Link></li>
              <li><Link to="/blog">ブログ</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
            </ul>
          </nav>
        </header>

       

        {/* アニメーションのオーバーレイ */}
        {isOverlayVisible && <div className="fullscreen-overlay"></div>}

        <canvas ref={canvasRef} id="canvas"></canvas>

        <div className='maincontent'>
          <h3 className='animated-text'>WELCOME TO MY PAGE</h3>
          <p className='animated-text'>プロフィールとコンテンツをご覧ください。</p>
        </div>

        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
        <div className="footer-content">
          <div className="footer-left">
            <p>私のホームページ</p>
            <p>© 2024 私のブログ. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <nav className="footer-nav">
              <a href="#home">ホーム</a>
              <a href="#profile">プロフィール</a>
              <a href="#content">コンテンツ</a>
              <a href="#blog">ブログ</a>
              <a href="#contact">お問い合わせ</a>
            </nav>
            <div className="social-icons">
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faCoffee} /> Coffee Icon
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faGithub} /> GitHub Icon
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} /> Twitter Icon
              </a>
            </div>
          </div>
        </div>
      </footer>
    
      </Router>
    </>
  );
}

export default App;
