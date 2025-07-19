import React from 'react';
import './EmojiButton.css';

function EmojiButton({ emoji, setEmojis }) {
  return (
    <div className='emoji-option' onClick={() => setEmojis(emoji)} title={emoji}>
      {emoji}
    </div>
  );
}

export default EmojiButton;