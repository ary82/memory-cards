import React from "react";
import "./styles/end.scss";
import Message from "./Message.jsx";

export default function End({ win, home, restart, currentMode }) {
  return (
    <>
      <div className="overlay"></div>
      <dialog className="dialog" open>
        {win ? <h1>You Win!</h1> : <h1>You Lose</h1>}
        <Message win={win} currentMode={currentMode} />
        <div className="button_div">
          <button onClick={() => home()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z"
              />
            </svg>
            <h3>Back to home</h3>
          </button>
          <button onClick={() => restart()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z"
              />
            </svg>
            <h3>Restart</h3>
          </button>
        </div>
      </dialog>
    </>
  );
}
