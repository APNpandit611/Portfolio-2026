import { FC } from "react";

type logoColor = {
    color: string;
}
const Logo:FC<logoColor> = (color) => {
   
    return (
        <a href="#hero" className={`text-2xl text-${color} uppercase font-extrabold font-mono tracking-wider leading-none`}>
            AP
        </a>
    );
};

export default Logo;
