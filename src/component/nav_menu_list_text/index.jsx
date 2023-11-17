import { Link } from "react-router-dom";

const MenuList = ({ link_to, text1, text2, onClick, pathname, matchname }) => {
  return (
    <Link to={link_to} className="cursor-pointer" onClick={onClick}>
      <ul
        className={`${
          pathname && pathname == matchname ? "text-yellow-400" : ""
        } group text-white hover:outlin outline-1 px-2 hover:text-yellow-400 duration-300`}
      >
        <li className="text-sm translate-y-1">{text1}</li>
        <li className="font-bold ">{text2}</li>
      </ul>
    </Link>
  );
};

export default MenuList;
