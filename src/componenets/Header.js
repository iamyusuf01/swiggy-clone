import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { BiBookAlt } from "react-icons/bi";
import { SiHelpscout } from "react-icons/si";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
    const [toggelMenu, setToggel,] = useState(false);

    const ShowSideMenu = () => {
        setToggel(true);
    };

    const hideSideMenu = () => {
        setToggel(false);
    };

    const links = [
        {
            icon: <BiBookAlt />,
            name: "Swiggy Corporate"
        },
        {
            icon: <IoIosSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers"
        },
        {
            icon: <SiHelpscout />,
            name: "Helps"
        },
        {
            icon: <FaRegUserCircle />,
            name: "Sign In"
        },
        {
            icon: <AiOutlineShopping />,
            name: "Card"
        },
    ]
    return (
        <>
            <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu} style={{
                opacity: toggelMenu ? 1 : 0,
                visibility: toggelMenu ? "visible" : "hidden"
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }}
                    className="w-[500px] bg-white h-full absolute  duration-[400ms]"
                    style={{
                        left: toggelMenu ? '0' : '-100%'
                    }}></div>
            </div>

            <header className="p-2 shadow-xl">
                <div className="max-w-[1200px] mx-auto border-red-500 flex items-center">
                    <div className="w-[100px]">
                        <img src="img/logo.png" className="w-full" alt="" />
                    </div>
                    <div>
                        <span className=" cursor-pointer font-bold  text-orange-400">other</span>
                        <RxCaretDown onClick={ShowSideMenu} fontSize={35} className="cursor-pointer font-bold inline text-[0.9rem] text-orange-400" />
                    </div>
                    <nav className="flex list-none gap-6 ml-auto font-semibold">
                        {
                            links.map(
                                (link, index) => {
                              return  <li key={index} className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
                                    {link.icon}
                                    {link.name}
                                </li>
                            })               
                        }

                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;