import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'react', name: 'React' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'webdev', name: 'Web Dev' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      description: 'A deep dive into React Hooks and how they can simplify your code.',
      date: '2024-02-07',
      category: 'react',
      readTime: '5 min read',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 2,
      title: 'JavaScript ES6+ Features',
      description: 'Exploring the modern features of JavaScript that every developer should know.',
      date: '2024-02-05',
      category: 'javascript',
      readTime: '4 min read',
      image: 'https://via.placeholder.com/400x250',
    },
    {
      id: 3,
      title: 'Building Responsive Websites',
      description: 'Best practices for creating responsive and mobile-friendly websites.',
      date: '2024-02-03',
      category: 'webdev',
      readTime: '6 min read',
      image: 'https://via.placeholder.com/400x250',
    },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Latest thoughts and insights</p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              } transition-colors`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary">{post.category}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary hover:text-primary-dark transition-colors"
                    onClick={() => {
                      // Add your blog post link logic here
                      console.log(`Navigating to blog post: ${post.id}`);
                    }}
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
