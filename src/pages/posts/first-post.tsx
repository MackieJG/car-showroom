import React from 'react';
import Link from 'next/link';

const FirstPost = () => {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome to my home page!</p>
        <Link href="/">Back to home</Link>
      </div>
    );
  };
  
  export default FirstPost;