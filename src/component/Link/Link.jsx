// Link.jsx
const Link = ({ route }) => {
  return (
    <li className="mr-6">
      <a
        href={route.path}
        className="hover:text-blue-300 transition duration-300"
      >
        {route.name}
      </a>
    </li>
  );
};

export default Link;
