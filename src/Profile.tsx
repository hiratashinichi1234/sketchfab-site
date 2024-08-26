import React from 'react';

const Profile: React.FC = () => {
  return (
    <div>
    <section id="profile">
      <div className="profile-header">
          <h2>プロフィール</h2>
        </div>
        <div className='profile-cover'>
      <div className='text-overlay'>
        <h1>WELCOME TO</h1>
        <h2>My Profile</h2>
      </div>
      <img src="./public/bed.jpg" alt="プロフィールカバー画像" className='cover-image' />
    </div>
        <div className="profile-content">
          <div className="profile-image">
            <img src="./public/bed.jpg" alt="プロフィール画像" />
          </div>
          <div className="profile-details">
            <p className="name">名前: 山田太郎</p>
            <p className="age">年齢: 30歳</p>
            <p className="comment">コメント: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti similique deleniti optio. Nulla neque beatae necessitatibus! Est ducimus eos repellendus reprehenderit, vel nihil exercitationem voluptas, nam, eius ipsam placeat?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti similique deleniti optio. Nulla neque beatae necessitatibus! Est ducimus eos repellendus reprehenderit, vel nihil exercitationem voluptas, nam, eius ipsam placeat? 
            </p>
          </div>
        </div>
        <div className="roopanime">
    <div className="images">
      <div className="image-set">
        <img src="./public/bed2.jpg" alt="Image 1"/>
        <img src="./public/bed3.jpg" alt="Image 2"/>
        <img src="./public/bed3.jpg" alt="Image 3"/>
        <img src="./public/bed4.jpg" alt="Image 4"/>
        <img src="./public/bed5.jpg" alt="Image 5"/>
      </div>
    </div>
  </div>
      </section>
    </div>
  );
};

export default Profile;