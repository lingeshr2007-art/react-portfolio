import React from "react";

const ErrorPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center space-y-6">
      <div className="text-center">
        <img
          src="https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif"
          alt="Funny Error"
          className="w-64 mx-auto rounded-full shadow-lg"
        />
      </div>

      <h1 className="text-6xl font-bold animate-bounce ">
        Oops! Lost in Space?
      </h1>
      <p className="text-xl text-gray-400">
        It seems you've found a page that doesn't exist... or maybe it's hiding
        from you!
      </p>

      <div className="text-center">
        <h2 className="text-3xl mb-2">Don't Panic!</h2>
        <p className="text-lg text-gray-300">
          Let's get you back to safety. Click the button below or enjoy some
          confetti first!
        </p>
      </div>

      <a
        href="/"
        className="text-black font-bold rounded-full py-4 px-6 hover:bg-yellow-400 bg-yellow-500 shadow-lg transform hover:scale-110 transition duration-300"
      >
        Beam Me Up, Scotty!
      </a>

      <button
        onClick={() => alert("🎉 Confetti party! 🎉")}
        className="text-white underline mt-4 hover:text-yellow-300"
      >
        Throw Confetti Instead 🎊
      </button>

      <footer className="absolute bottom-4 text-gray-500 text-sm">
        <p>
          Created with 🤓 &amp; 🚀 by{" "}
          <span className="font-bold">Lingesh</span>
        </p>
      </footer>
    </div>
  );
};

export default ErrorPage;
