import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import MenuItems from "./MenuItems";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 dark:bg-primary dark:text-white z-50">
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between py-6">
                <Logo color="primary"/>
                <MenuItems />
                <HamburgerMenu />
            </div>
        </nav>
    );
};

export default Navbar;
