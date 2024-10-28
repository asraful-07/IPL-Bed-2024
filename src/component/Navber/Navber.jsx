import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/available-players", name: "Available Players" },
    { id: 3, path: "/selected-players", name: "Selected Players" },
    { id: 4, path: "/newsletter", name: "Newsletter" },
    { id: 5, path: "/about", name: "About" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-4 shadow-md flex justify-between items-center bg-purple-600 text-white mb-24">
      <h1 className="text-2xl font-bold">Navbar</h1>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <MdClose className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </div>
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-purple-600 md:flex pl-4 ${
          open ? "block" : "hidden"
        } md:block`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
