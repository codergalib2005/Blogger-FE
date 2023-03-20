import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const post = {
      title,
      body,
      code,
    };

    fetch('https://example.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <br />
      <label>
        Body:
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </label>
      <br />
      <label>
        Code:
        <textarea
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      {code && (
        <SyntaxHighlighter language="javascript" style={tomorrow}>
          {code}
        </SyntaxHighlighter>
      )}
    </form>
  );
}

export default PostForm;
