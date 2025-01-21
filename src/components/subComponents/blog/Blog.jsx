// Blog.jsx
import React from 'react';
import './style/Blog.css';
import one from './style/images/one.svg'
import two from './style/images/two.svg'
import three from './style/images/three.svg'
import four from './style/images/four.svg'
import five from './style/images/five.svg'
import six from './style/images/six.svg'

const Blog = () => {
  const blogs = [
    {
      id: 1,
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
      imageUrl: `${one}`
    },
    {
      id: 2,
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Complience"],
      imageUrl: `${two}`
    },
    {
        id: 3,
        author: "Mahesh Kumar3",
        date: "1 feb 2023",
        title: "Scale-Up Company Offer",
        description: "Mental models are simple expressions of complex processes or relationships.",
        tags: ["Tax", "Research", "Complience"],
        imageUrl: `${three}`
      },
      {
        id: 4,
        author: "Prabhash Mishra",
        date: "1 Jan 2023",
        title: "Small business & Startup",
        description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        tags: ["Tax & Audit", "Management"],
        imageUrl: `${four}`
      },
      {
        id: 5,
        author: "Mahesh Kumar",
        date: "1 Jan 2023",
        title: "Scale-Up Company Offer",
        description: "Mental models are simple expressions of complex processes or relationships.",
        tags: ["Tax", "Research", "Complience"],
        imageUrl: `${five}`
      },
      {
          id: 6,
          author: "Mahesh Kumar3",
          date: "1 feb 2023",
          title: "Scale-Up Company Offer",
          description: "Mental models are simple expressions of complex processes or relationships.",
          tags: ["Tax", "Research", "Complience"],
          imageUrl: `${six}`
        },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <span className="explore-text">EXPLORE OUR BLOGS</span>
        <h2 className="blog-title">Accelerate Digital Transformation</h2>
      </div>
      
      <div className="blog-grid">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <div className="blog-image">
              <img src={blog.imageUrl} alt={blog.title} />
              
            </div>
            
            <div className="blog-content">
              <div className="blog-meta">
                <span className="author">{blog.author}</span>
                <span className="date">{blog.date}</span>
                
              </div>
              <div className='together'>
              <h3 className="card-title">{blog.title}</h3>
              <div className="arrow-icon">→</div>
              </div>
             
              <p className="description">{blog.description}</p>
              
              <div className="tags">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="show-more">
        <button className="show-more-button">
          Show more blogs →
        </button>
      </div>
    </section>
  );
};

export default Blog;