import React, { useState } from 'react';
import EmojiButton from './EmojiButton';
import ColorButton from './ColorButton';
import ImgRotate from './rotate.png';
import './Home.css';

function Home() {
  const [emojis, setEmojis] = useState("🌱");
  const [sliderValue, setSliderValue] = useState(50);
  const [bgColor, setBgColor] = useState("#e2e8f0");
  const [angle, setAngle] = useState(0);

  return (
    <div className="container min-h-screen w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: "20px 30px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      <div className="app-container relative z-10">
        <h1 className="header">
          Playing with Emojis Using <span className="header-highlight">useState</span>
        </h1>
        <p className="app-description">
          This is a simple React app that demonstrates how to use the <code>useState</code> hook to manage state.
        </p>

        <div
          className="emoji-container"
          style={{ fontSize: `${sliderValue}px`, backgroundColor: bgColor }}
        >
          <span style={{ transform: `rotate(${angle}deg)` }} className="emoji">
            {emojis}
          </span>
        </div>

        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="100"
            className="slider"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
          />
        </div>

        <div className="angle-container">
          <img
            src={ImgRotate}
            alt="rotate"
            className="rotate-image"
            title="Rotate Emoji"
            onClick={() => setAngle((angle + 45) % 360)}
          />
        </div>

        <div className="emoji-picker">
          <EmojiButton emoji="🌱" setEmojis={setEmojis} />
          <EmojiButton emoji="🌳" setEmojis={setEmojis} />
          <EmojiButton emoji="🌲" setEmojis={setEmojis} />
          <EmojiButton emoji="🌴" setEmojis={setEmojis} />
          <EmojiButton emoji="🌵" setEmojis={setEmojis} />
          <EmojiButton emoji="🌾" setEmojis={setEmojis} />
          <EmojiButton emoji="🌿" setEmojis={setEmojis} />
          <EmojiButton emoji="🍀" setEmojis={setEmojis} />
          <EmojiButton emoji="🍃" setEmojis={setEmojis} />
          <EmojiButton emoji="🍂" setEmojis={setEmojis} />
          <EmojiButton emoji="🍁" setEmojis={setEmojis} />
          <EmojiButton emoji="🌸" setEmojis={setEmojis} />
        </div>

        <div className="color-picker">
          <ColorButton bgColor="#ff944d" setBgColor={setBgColor} />
          <ColorButton bgColor="#80ffff" setBgColor={setBgColor} />
          <ColorButton bgColor="#ff99cc" setBgColor={setBgColor} />
          <ColorButton bgColor="#ff3333" setBgColor={setBgColor} />
          <ColorButton bgColor="#ffff33" setBgColor={setBgColor} />
          <ColorButton bgColor="#db4dff" setBgColor={setBgColor} />
          <ColorButton bgColor="#ff6666" setBgColor={setBgColor} />
          <ColorButton bgColor="#33ff33" setBgColor={setBgColor} />
          <ColorButton bgColor="#99b3e6" setBgColor={setBgColor} />
          <ColorButton bgColor="#999966" setBgColor={setBgColor} />
          <ColorButton bgColor="#1a1aff" setBgColor={setBgColor} />
          <ColorButton bgColor="#d2ff4d" setBgColor={setBgColor} />
          <ColorButton bgColor="#ad33ff" setBgColor={setBgColor} />
          <ColorButton bgColor="#ff8533" setBgColor={setBgColor} />
          <ColorButton bgColor="#ff66d9" setBgColor={setBgColor} />
        </div>
      </div>
    </div>
  );
}

export default Home;
