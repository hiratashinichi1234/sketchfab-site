import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
    <div className="contact-content">
      <h2>お問い合わせ</h2>
      <p>何かお問い合わせがございましたらお気軽にご連絡ください。</p>
      <form className="contact-form">
        <label htmlFor="name">氏名:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">メールアドレス:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">内容:</label>
        <textarea id="message" name="message" rows={4} required></textarea>

        <button type="submit">送信</button>
      </form>
    </div>
  </section>
  );
};

export default Contact;