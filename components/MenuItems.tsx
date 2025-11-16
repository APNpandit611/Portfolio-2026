import { navbarItems } from "@/utils/data";
import Switch from "./ToggleButton";

const MenuItems = () => {
    return (
        <div className="hidden md:flex font-mono uppercase items-center gap-14 text-[14px] text-secondary dark:text-white">
            {navbarItems.map((item, index) => (
                <a href={`#${item}`} key={index}>
                    {item}
                </a>
            ))}
            {/* <DarkModeToggle/> */}
            <Switch/>
        </div>
    );
};

export default MenuItems;
