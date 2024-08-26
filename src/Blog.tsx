import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Blog: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
    <section id="blog">
        <div className="blog-content">
          <h2>ブログ</h2>
          <p>私の日常などを定期的に書いたものになります♪</p>
          <div className="image-grid">
            <a href="link-to-post1" className="fade-in">
              <img src="./public/bed2.jpg" alt="Image 1" />
              <h3>タイトル1</h3>
              <p>説明1</p>
            </a>
            <a href="link-to-post2" className="fade-in">
              <img src="./public/bed3.jpg" alt="Image 2" />
              <h3>タイトル2</h3>
              <p>説明2</p>
            </a>
            <a href="link-to-post3" className="fade-in">
              <img src="./public/bed4.jpg"alt="Image 3" />
              <h3>タイトル3</h3>
              <p>説明3</p>
            </a>
          </div>
          <div className="image-grid">
            <a href="link-to-post4" className="fade-in">
              <img src="./public/bed5.jpg" alt="Image 4" />
              <h3>タイトル4</h3>
              <p>説明4</p>
            </a>
            <a href="link-to-post5" className="fade-in">
              <img src="./public/bed6.jpg" alt="Image 5" />
              <h3>タイトル5</h3>
              <p>説明5</p>
            </a>
            <a href="link-to-post6" className="fade-in">
              <img src="./public/bed7.jpg" alt="Image 6" />
              <h3>タイトル6</h3>
              <p>説明6</p>
            </a>
          </div>
          <div className="image-grid">
            <a href="link-to-post7" className="fade-in">
              <img src="./public/bed.jpg" alt="Image 7" />
              <h3>タイトル7</h3>
              <p>説明7</p>
            </a>
            <a href="link-to-post8" className="fade-in">
              <img src="./public/bed9.jpg" alt="Image 8" />
              <h3>タイトル8</h3>
              <p>説明8</p>
            </a>
            <a href="link-to-post9" className="fade-in">
              <img src="./public/bed10.jpg" alt="Image 9" />
              <h3>タイトル9</h3>
              <p>説明9</p>
            </a>
          </div>
        </div>
      </section>

      
        <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>
        <ul className="menu-items">
          <li><a href="#profile">プロフィールを見る</a></li>
          <li>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} /> Twitter Icon
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub Icon
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCoffee} /> Coffee Icon
            </a>
          </li>
          <li><a href="#previous-posts">以前の記事</a></li>
          <li>
            <a href="#2022-2024">2022年から2024年の月のリンク一覧</a>
            {/* サブメニューのリンク（例） */}
            <ul className="sub-menu">
              <li><a href="#2022-01">2022年1月</a></li>
              <li><a href="#2022-02">2022年2月</a></li>
              <li><a href="#2022-03">2022年3月</a></li>
              <li><a href="#2022-04">2022年4月</a></li>
              <li><a href="#2022-05">2022年5月</a></li>
              {/* 他の月も追加 */}
            </ul>
          </li>
          <li><a href="#latest-comments">最新のコメント</a></li>
          <li className="lorem-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </li>
        </ul>
      </div>

      
      <button className="menu-btn" onClick={toggleMenu}>≡</button>
    </>
  );
};

export default Blog;