import Header from "./component/Header";
import "./styles.css";
import { emojis } from "./Data";
import { useState } from "react";
export default function App() {
  const [emoji, setEmoji] = useState(emojis);
  const [userText, setUserText] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(
    "Search or click on emojis to see their meanings"
  );

  const handleSelect = (name) => {
    setSelectedEmoji(name);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setUserText(value);
  };

  const isExist = emoji?.some((eachEmoji) => eachEmoji.name === userText);

  return (
    <div>
      <Header />
      <div className="main">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Find your Emoji right here"
        />
        <p className="searchresult">
          {userText.length > 0
            ? isExist
              ? "Yeey, we have this in our Database"
              : "Oops, This Emoji is not in our database."
            : null}
        </p>
        <p className="emojiname"> {selectedEmoji} </p>
        <div className="container">
          {emoji.map((eachEmoji, index) => (
            <p onClick={() => handleSelect(eachEmoji.name)} key={index}>
              {" "}
              {eachEmoji.emoji}{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
