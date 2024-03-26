import { useState, useEffect } from "react";
import { Button } from "../Common/Buttons";
import "./Home.css";

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 173, y: 319 });

  const changeCursor = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCursorPos({ x: e.pageX, y: e.pageY });
    console.log(e.pageX);
    console.log(e.pageY);
  };

  const textEnchanceOnHover = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.previousElementSibling?.classList.remove("dark-font");
    e.currentTarget.nextElementSibling?.classList.remove("dark-font");
    e.currentTarget.classList.add("dark-font");
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center flex-column pt-5 home-card"
      onMouseMove={(e) => changeCursor(e)}
    >
      <span className="lead bold cursor-lg p-3">
        <strong>👋, my name is Rohan and I am a Web Developer</strong>
      </span>{" "}
      <div className="my-1 animation-fonts  cursor-lg">
        <div
          className="font-lg dark-font"
          onMouseOver={(e) => textEnchanceOnHover(e)}
        >
          WebDesigner
        </div>
        <div
          className="font-lg ms-4"
          onMouseOver={(e) => textEnchanceOnHover(e)}
        >
          & Developer
        </div>
        {/* <div className="profile-pic">
          <img src="/imgs/profile.png" alt="" />
        </div> */}
      </div>
      <div className="mt-5 pt-5 cursor-lg">
        <Button
          onClick={() => console.log("hei")}
          theme="light"
          text="You need a designer"
          className="cursor-none"
          />
        <Button
          theme="dark"
          text="You need a developer"
          className="cursor-none"
          onClick={() => console.log("hei")}
        />
      </div>
      <div
        className="cursor"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      ></div>
    </div>
  );
}
