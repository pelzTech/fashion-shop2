import React from 'react';

const LaletsBlog = () => {
  const blogData = [
    {
      title: 'The Future of Technology',
      subtitle: 'Exploring the advancements in AI and Automation',
      description:
        'In this blog, we delve deep into the world of Artificial Intelligence and Automation, exploring how these technologies are shaping the future of industries, from healthcare to manufacturing.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'The Rise of Sustainable Fashion',
      subtitle: 'How the fashion industry is going green',
      description:
        'Sustainable fashion is not just a trend, it’s a movement. Learn about how brands are adapting to eco-friendly production processes and how consumers are influencing change.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'The Impact of Social Media on Society',
      subtitle: 'Is social media helping or harming us?',
      description:
        'Social media has changed the way we communicate, but it also has its downsides. In this post, we discuss the positive and negative impacts of social media on society.',
      image: 'https://via.placeholder.com/600x400',
    },
  ];

  return (
    <div>
      <h1>Lalet's Blog</h1>
      {blogData.map((post, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{post.title}</h2>
          <h3>{post.subtitle}</h3>
          <p>{post.description}</p>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
};

export default LaletsBlog;
