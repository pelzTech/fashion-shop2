import React from 'react';
import fashionTechImg from '../Assets/fashion-tech2.jpg'; 
import sustainableFashionImg from '../Assets/sustainable-fashion2.jpg'; 
import streetStyleImg from '../Assets/street-style2.jpg'; 

const LaletsBlog = () => {
  const blogData = [
    {
      title: 'The Intersection of Fashion and Technology',
      subtitle: 'How technology is transforming the fashion world',
      description:
        'From smart fabrics to AI-powered design tools, technology is revolutionizing the fashion industry. Designers now use 3D printing to create intricate patterns, while smart wearables blend functionality with style. This post dives into the innovations reshaping the runway and beyond.',
      image: fashionTechImg,
    },
    {
      title: 'Sustainable Fashion: A Green Revolution',
      subtitle: 'Why sustainability is the future of fashion',
      description:
        'The fashion industry is undergoing a green revolution. With increasing awareness about environmental impact, brands are switching to organic materials, reducing water usage, and adopting circular fashion principles. In this article, we discuss how conscious consumerism is driving this transformation.',
      image: sustainableFashionImg,
    },
    {
      title: 'The Rise of Street Style Culture',
      subtitle: 'From subcultures to mainstream fashion',
      description:
        'Street style has become a dominant force in the fashion world, blending creativity from urban cultures and global trends.From sneakers to oversized jackets, street style reflects individuality and innovation. Explore how this cultural phenomenon has shaped modern-day fashion.',
      image: streetStyleImg,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Latest Blog</h1>
      <div style={styles.blogList}>
        {blogData.map((post, index) => (
          <div key={index} style={styles.blogPost}>
            <img
              src={post.image}
              alt={post.title}
              style={styles.blogImage}
            />
            <div style={styles.textContainer}>
              <h2 style={styles.postTitle}>{post.title}</h2>
              <h3 style={styles.postSubtitle}>{post.subtitle}</h3>
              <p style={styles.postDescription}>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '40px',
  },
  blogList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  blogPost: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap',
  },
  blogImage: {
    width: '50%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  postTitle: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '10px',
  },
  postSubtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '15px',
  },
  postDescription: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.6',
  },

  '@media (max-width: 768px)': {
    blogPost: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    blogImage: {
      width: '100%',
      height: 'auto',
      marginBottom: '15px',
    },
    textContainer: {
      textAlign: 'center',
    },
    postTitle: {
      fontSize: '24px',
    },
    postSubtitle: {
      fontSize: '16px',
    },
    postDescription: {
      fontSize: '14px',
    },
  },

  '@media (max-width: 480px)': {
    title: {
      fontSize: '30px',
    },
    postTitle: {
      fontSize: '22px',
    },
    postSubtitle: {
      fontSize: '14px',
    },
    postDescription: {
      fontSize: '12px',
    },
  },
};

export default LaletsBlog;
