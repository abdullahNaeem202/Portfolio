import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Toggle from "./Toggle";

function NavigationBar() {
    // state and setter for mobile menu open or close
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    // state and setter for navbar visible or not visible upon scroll 
    const [isVisible, setisVisible] = useState(true);
    // state and setter for checking if the navbar is at the top of the screen to dynamically change color
    const [isAtTop, setisAtTop] = useState(true);

    // effect function for hiding or showing the navbar 

    useEffect(() => {
        let lastScrollYPos = window.scrollY;

        const showNavBar = () => {
            const currScrollYPos = window.scrollY;
            
            setisAtTop(currScrollYPos <= 10);

            if(currScrollYPos > lastScrollYPos && currScrollYPos > 100) {
                setisVisible(false);
            }else{
                setisVisible(true); 
            }

            lastScrollYPos = currScrollYPos;
        }
        window.addEventListener("scroll", showNavBar)

        return () => window.removeEventListener("scroll", showNavBar)
    }, [])

    // effect function for determining if the scrollbar is shown or not when the mobile menu is open or not 
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => document.body.style.overflow = '';
    }, [isMobileMenuOpen])
    
    // event handler to handle the case when the mobile menu icon is clicked - isMobileMenuOpen will update

    const toggleIsMobileMenuOpen = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }
    // event handler to handle the case to close the mobile menu (press the x icon) - isMobileMenuOpen will update back to false

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <>
        <nav className={`fixed w-full top-0 py-3 transition duration-200 z-50
        ${isVisible ? "translate-y-0": "-translate-y-full"} 
        ${isAtTop ? "bg-[#d9dde0] dark:bg-[#1a202c]" : "bg-[#d1d4d7] dark:bg-[#212734]"}` }>
            {/* inner div for the navigation bar container - holds all of our links and the toggle, #262d3c*/}
            <div className="mx-auto flex items-center pr-5 justify-end"> 
                {/* div that will position each link in the container*/}
                <div className="hidden md:flex items-center justify-end space-x-8 w-full pr-4">
                    <div> 
                        <Toggle isGlobal={true} />
                    </div>
                    {/*anchor tag directed to section ID for "About" section*/} 
                    <a href = "#about" className="text-[#3b5383] hover:text-[#75609b] dark:text-[#9eb9ef] dark:hover:text-[#d0bfed] font-bold text-lg">About</a>
                    {/*divs for each element of our container - Experience */}
                    <div className = "dark:text-[#cccfdb] font-medium text-lg">Experience</div>
                    {/*divs for each element of our container - Projects */}
                    <div className = "dark:text-[#cccfdb] font-medium text-lg"> Projects</div>
                    {/*divs for each element of our container - Contact */}
                    <div className = "dark:text-[#cccfdb] font-medium text-lg">Contact</div>
                     {/*div for Resume Button */}
                    <div>
                        <a href = '/Abdullah_Naeem_Resume.pdf' target = "_blank" rel = "noopener noreferrer">
                            <button className="font-medium transition rounded border-2 hover:-translate-y-1 hover:ring-2
                            hover:ring-[#6d7a95] dark:hover:ring-[#d2d4df] duration-100  
                            text-[#2e2f2f] dark:text-[#cccfdb] border-[#2f549f] dark:border-[#9eb9ef] p-2 text-lg shadow-md">Resume</button> 
                        </a>
                    </div>
                </div>
                {/* div for menu button on mobile */}
                <div className="md:hidden flex items-center">
                   <button onClick = {toggleIsMobileMenuOpen}>
                        <FontAwesomeIcon icon = {faBars} aria-label = 'MobileMenuToggle'  className="dark:text-[#cccfdb] fa-2xl"/>
                    </button>
                </div>
            </div>
            </nav>
            {/* sidebar mobile menu*/}
            {isMobileMenuOpen && (
            <nav className="md:hidden z-50 fixed h-full w-screen dark:bg-[#1a202c]/70 bg-[#d9dde0]/70 top-0 right-0 animate-open-menu">
                <div className="fixed top-0 right-0 backdrop-blur-sm w-screen h-full z-50" onClick={closeMobileMenu}>
                </div>
                <div className="flex flex-col items-center dark:bg-[#262d3a] bg-[#c3cad0] absolute top-0 right-0 h-screen p-8 space-y-8 z-50 w-56">
                    {/* Button to close the mobile menu */}
                    <button onClick = {closeMobileMenu}>
                        <FontAwesomeIcon icon = {faX} aria-label = 'MobileMenuClose' className=" dark:text-[#cccfdb] fa-2xl mb-10"/>
                    </button>
                    {/*anchor tag directed to section ID for "About" section*/} 
                    <a href = '#about' className="block py-4 text-xl font-bold 
                    text-[#3b5383] hover:text-[#75609b] dark:text-[#9eb9ef] dark:hover:text-[#d0bfed]">About</a>
                    {/* divs for each menu item on mobile - Experiencet*/}
                    <div className="block py-4 text-xl font-bold dark:text-[#cccfdb]">Experience</div>
                    {/* divs for each menu item on mobile - Projects*/}
                    <div className="block py-4 text-xl font-bold dark:text-[#cccfdb]">Projects</div>
                    {/* divs for each menu item on mobile - Contact*/}
                    <div className="block py-4 text-xl font-bold dark:text-[#cccfdb]">Contact</div>
                     {/* divs for each menu item on mobile - Resume Button*/}
                    <div className="block py-4 text-xl font-bold dark:text-[#cccfdb]">
                        <a href = '/Abdullah_Naeem_Resume.pdf' target = "_blank" rel = "noopener noreferrer">
                            <button className="font-medium transition rounded border-2 hover:-translate-y-1 hover:ring-2
                            hover:ring-[#6d7a95] dark:hover:ring-[#d2d4df] duration-100  
                            text-[#2e2f2f] dark:text-[#cccfdb] border-[#2f549f] dark:border-[#9eb9ef] p-2 text-lg shadow-md">Resume</button> 
                        </a>
                    </div>
                    {/* dark and light mode toggle for accessibility - positioning controlled by prop in toggle.jsx*/}
                    <div className = 'py-2'>
                        <Toggle isGlobal = {true}/>
                    </div>
                </div>
            </nav> )}
            </>
    );
}

export default NavigationBar