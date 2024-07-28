import React from "react";

const App = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="flex items-center justify-center h-screen">
        <div className="flex items-center gap-5 bg-white-300">
          <img src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1680781580/rithickImg.jpg" alt="profile img" className="h-[35vh] rounded-full" />
          <div className="text-white">
            <p>Hey I am</p>
            <h1>Rithick Roshan S</h1>
            <h3>MERN stack devloper & Cyber security Student</h3>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
