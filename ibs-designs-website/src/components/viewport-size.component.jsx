import { useState, useEffect } from "react";

//Component for detecting viewport size
    //used for components that need to be mounted/dismounted based on viewport size
export default function ViewportSize () {
    //set initial window size
    const [ width, setWidth ] = useState(window.innerWidth);
    const [ height, setHeight ] = useState(window.innerHeight);

    //watch for resizing and reset the window size
    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener("resize", handleWindowResize);

        //cleanup
        return () => window.removeEventListener("resize", handleWindowResize);
    });

    return { width, height };
}
