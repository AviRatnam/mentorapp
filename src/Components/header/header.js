const Header = () => {
  const headerstyle = `py-5 px-52 border-b border-gray-200 flex justify-between items-center bg-white fixed w-full `;
  const signupstyle = `rounded-lg bg-black px-6 py-3 text-white text-sm font-bold hover:bg-blue-400 transition duration-400`;
  const loginstyle = `rounded-lg bg-white px-6 py-3 text-black text-sm font-bold hover:bg-black hover:text-white transition duration-400 border border-black`;

  return (
    <div class={headerstyle}>
      <span class="text-3xl font-sans font-bold">Thinkify</span>
      <div class="flex justify-between gap-5 items-center">
        <a class="font-bold" href="#">
          Become a mentor
        </a>
        <a class="font-bold" href="#">
          Find a mentor
        </a>
        <button class={loginstyle}>Login</button>
        <button class={signupstyle}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
