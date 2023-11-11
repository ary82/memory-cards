import React from "react";

export default function Message({ win, currentMode }) {
  return (
    <div className="message">
      {win && currentMode === 1 && (
        <>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
            alt=""
          />
          <p>
            You've won on easy mode. Nice! How about trying some harder modes,
            if you're up for it?
          </p>
        </>
      )}
      {win && currentMode === 2 && (
        <>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png"
            alt=""
          />
          <p>
            You've won on medium mode. Congratulations! Now go get that hard
            difficulty!
          </p>
        </>
      )}
      {win && currentMode === 3 && (
        <>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
            alt=""
          />
          <p>
            You've won on hard mode. You've seen all this website has to offer,
            maybe even more.
          </p>
        </>
      )}
      {!win && currentMode === 1 && (
        <>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
            alt=""
          />
          <p>
            You've lost on easy mode. Click Back to Home and read the rules
            again. Keep going and you'll get there...if that's possible for you.
          </p>
        </>
      )}
      {!win && currentMode === 2 && (
        <>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png"
            alt=""
          />
          <p>
            You've lost on medium mode. You can try again, but it's difficult
            when all your moves are just counter and destiny bond.
          </p>
        </>
      )}
      {!win && currentMode === 3 && (
        <>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
            alt=""
          />
          <p>
            You've lost on hard mode. But don't worry. Keep going and you'll
            eventually get there, future Gyarados.
          </p>
        </>
      )}
    </div>
  );
}
