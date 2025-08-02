import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return(
        <header className = 'min-h-screen pt-56 sm:pt-40 md:pt-96 lg:pt-80 px-8 sm:px-10 md:px-16 lg:px-20'>
            <h3 className = 'text-md md:text-lg mb-4 text-[#2f549f] dark:text-[#9eb9ef] font-semibold font-mono'> Hi! My name is</h3> 
            <h1 className = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#2e2f2f] dark:text-[#cccfdb]">Abdullah Naeem.</h1>
            <p className = "text-sm md:text-lg max-w-[250px] md:max-w-[500px] lg:max-w-2xl dark:text-white"> I'm a Data Science graduate from Simon Fraser University with a passion in data analysis and 
                transforming data into actionable business insights. I'm always open to collaborating on a new project or having a conversation - feel free to reach out! </p>
            <nav className = "mt-4">
                    <ul className = "flex flex-row gap-4">  
                        <li> <a href = "https://github.com/abdullahNaeem202" target = "_blank" rel = "noopener noreferrer" aria-label = "GitHub" className = 'delay-75 duration-100 ease-in-out'> 
                            <FontAwesomeIcon icon = {faGithub} className='text-3xl md:text-4xl transition hover:-translate-y-1 dark:text-[#9eb9ef] dark:hover:text-white'/></a></li>
                        <li> <FontAwesomeIcon icon = {faCaretRight}  className = 'dark:text-white text-3xl md:text-4xl '/> </li>
                        <li> <a href = "https://www.linkedin.com/in/naeemabdullah2002/" target = "_blank" rel = "noopener noreferrer" aria-label = "LinkedIn" className ='delay-75 duration-100 ease-in-out '> 
                            <FontAwesomeIcon icon = {faLinkedin} className=' text-3xl md:text-4xl transition hover:-translate-y-1 dark:text-[#9eb9ef] dark:hover:text-white'/></a> </li>
                        <li> <FontAwesomeIcon icon = {faCaretRight} className = 'dark:text-white text-3xl md:text-4xl'/> </li>
                        <li> <a href = "mailto: abdullahnaeem@hotmail.ca" aria-label = "Email" className ='delay-75 duration-100 ease-in-out '> 
                            <FontAwesomeIcon icon = {faEnvelope} className=' text-3xl md:text-4xl transition hover:-translate-y-1 dark:text-[#9eb9ef] dark:hover:text-white'/></a></li>
                    </ul>
            </nav>
        </header>
        
    );
}

export default Header