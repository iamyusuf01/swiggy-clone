import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
const Header = () => {
    const [toggelMenu, setToggel, ] = useState(false);

    const ShowSideMenu = () => {
        setToggel(true);
    };

    const hideSideMenu = () => {
        setToggel(false);
    };
    return (
        <>
            <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu} style={{
                opacity: toggelMenu ? 1 : 0,
                visibility: toggelMenu ? "visible" : "hidden"
            }}>
            <div className="w-[500px] bg-white h-full absolute  duration-[400ms]" 
            style={{
                left: toggelMenu ? '0' : '-100%'
            }}></div>
            </div>
            
            <header className="p-2 shadow-xl">
                <div className="max-w-[1200px] mx-auto border-red-500 flex items-center">
                    <div className="w-[100px] border border-blue-500">
                        <img src="img/logo.png" className="w-full" alt="" />
                    </div>
                    <div>
                        <span className=" cursor-pointer font-bold  text-orange-400">other</span>
                        <RxCaretDown onClick={ShowSideMenu} fontSize={35} className="cursor-pointer font-bold inline text-[0.9rem] text-orange-400" />
                    </div>
                    <div>

                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;