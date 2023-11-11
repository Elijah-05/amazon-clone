const MenuList = ({ href, text1, text2 }) => {
  return (
    <a href={href} className=" cursor-pointer">
      <ul className="group text-white hover:outlin outline-1 px-2 hover:text-yellow-400 duration-300">
        <li className="text-sm translate-y-1">{text1}</li>
        <li className="font-bold ">{text2}</li>
      </ul>
    </a>
  );
};

export default MenuList;
