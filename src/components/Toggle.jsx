import { useState } from "react"; /* hook - to implement button state - so we can switch states from dark to light mode*/
import { useEffect } from "react"; /* hook - to set the dark and light mode colour effects on screen */
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useLocalStorage from "use-local-storage"; // importing local storage to keep track of user choice for dark/light mode

function Toggle() {
    const user_preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', user_preference); /* Initializing useState hook */

    /* our effect function */
    useEffect(() => {
       darkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark");}, [darkMode]);

     // event handler - when the user clicks the toggle, darkMode state will update, which in turn causes the effect to run
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return(
    <div className="absolute top-7 left-7">
        <button className="w-16 h-16 bg-[#7c828c] dark:bg-[#f6f7f2] rounded-full font-semibold" onClick = {toggleDarkMode}  >
        {darkMode ? 
        <FontAwesomeIcon icon = {faSun} size = '2x' aria-label = 'LightMode'/> : <FontAwesomeIcon icon = {faMoon} size = '2x' aria-label = 'DarkMode' /> }
        </button>
    </div>
    )


}

export default Toggle