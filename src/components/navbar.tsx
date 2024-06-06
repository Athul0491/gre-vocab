import UserDropdown from "./UserDropdown";

const Navbar = () => {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-1.5 z-50">
      <h1 className="w-3/12">
        <a href="/">
          <span
            className="text-primary text-lg font-extrabold hover:text-green-700 duration-200"
            style={{ fontFamily: "Crush GRE Font, sans-serif" }}
          >
            Crush GRE
          </span>
        </a>
      </h1>
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-3 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">Home</a>
          </li>
          <li className="p-3 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">About us</a>
          </li>
          <li className="p-3 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">Library</a>
          </li>
          <li className="p-3 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="w-3/12 flex justify-end">
        <UserDropdown />
      </div>
    </header>
  );
};

export default Navbar;
