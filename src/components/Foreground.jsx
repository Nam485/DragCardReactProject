import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {

    const ref = useRef(null);  

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, mollitia.",
            filesize: "0.9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "Green",
            },
        },
        {
            desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            filesize: "1.2mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "View Details",
                tagColor: "Blue",
            },
        },
        {
            desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            filesize: "0.7mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "Green",
            },
        },
        {
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            filesize: "2.3mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "View Details",
                tagColor: "Red",
            },
        },
        {
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            filesize: "1.8mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "Green",
            },
        },
        {
            desc: "Laboris nisi ut aliquip ex ea commodo consequat.",
            filesize: "0.5mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "View Details",
                tagColor: "Yellow",
            },
        }
    ];
    
  return <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3]  flex gap-10 flex-wrap p-5">
   {data.map((item,index) => (
    <Card data= {item} key={index} refernce={ref}/>
   ))}
  </div>
}

export default Foreground;
