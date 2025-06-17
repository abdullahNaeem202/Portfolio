import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return(
        <header className = 'pl-8 pt-9'>
            <h3 className = 'text-lg md:mb-4 text-[#2f549f] dark:text-[#9eb9ef] font-semibold font-mono'> Hi! My name is</h3> 
            <h1 className = "text-6xl font-bold md:mb-4 text-[#2e2f2f] dark:text-[#cccfdb]">Abdullah Naeem.</h1>
            <p className = "text-lg max-w-2xl dark:text-white"> I'm a Data Science graduate from Simon Fraser University with a passion in data analysis and 
                transforming data into actionable business insights. I'm always open to collaborating on a new project or having a conversation - feel free to reach out! </p>
            <nav className = "md:mt-4">
                    <ul className = "flex flex-row gap-4">  
                        <li> <a href = "https://github.com/Hav0" target = "_blank" rel = "noopener noreferrer" aria-label = "GitHub" className = 'delay-75 duration-100 ease-in-out'> 
                            <FontAwesomeIcon icon = {faGithub} size = '2x' className='transition hover:-translate-y-1 dark:text-[#9eb9ef] dark:hover:text-white'/></a></li>
                        <li> <FontAwesomeIcon icon = {faCaretRight} size = '2x' className = 'dark:text-white'/> </li>
                        <li> <a href = "https://www.linkedin.com/in/naeemabdullah2002/" target = "_blank" rel = "noopener noreferrer" aria-label = "LinkedIn" className ='delay-75 duration-100 ease-in-out '> 
                            <FontAwesomeIcon icon = {faLinkedin} size = '2x' className='transition hover:-translate-y-1 dark:text-[#9eb9ef] dark:hover:text-white'/></a> </li>
                        <li> <FontAwesomeIcon icon = {faCaretRight} size = '2x' className = 'dark:text-white'/> </li>
                        <li> <a href = "mailto: abdullahnaeem@hotmail.ca" aria-label = "Email" className ='delay-75 duration-100 ease-in-out '> 
                            <FontAwesomeIcon icon = {faEnvelope} size = '2x' className='transition hover:-translate-y-1 dark:text-[#9eb9ef] dark:hover:text-white'/></a></li>
                    </ul>
            </nav>
        </header>
        
    );
}

export default Header