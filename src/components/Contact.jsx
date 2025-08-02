import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact () {
    return (
        <section id = 'contact' className="min-h-screen md:pt-52 pt-28 p-5">
             {/* Div That Seperates Heading from Main Content */}
             <div className=" px-2 md:px-12 lg:px-28 md:p-7 p-5 md:mb-5 mb-3">
                {/* Section Heading */}
                 <h2 className="relative md:text-2xl text-lg font-[650] text-[#2f549f] dark:text-[#9eb9ef] font-mono after:content-[''] 
                 after:inline-block after:align-middle after:ml-3 after:h-[2px] after:w-[130px] md:after:w-[450px] lg:after:w-[200px] after:bg-[#3b3c3c] after:dark:bg-[#cccfdb]"> Contact Me
                 </h2>
             </div>
             {/* Div That Includes The Contact Me Heading */}
             <div className=" md:p-5 p-3 md:mb-5 mb-3 text-center">
                {/* Main Heading */}
                <h1 className=" text-3xl md:text-5xl font-bold mb-4 text-[#2e2f2f] dark:text-[#cccfdb]">Feel Free To Reach Out</h1>
                {/* paragraph of text */}
                <p className=" mx-auto text-lg max-w-[450px] md:max-w-2xl lg:max-w-2xl dark:text-white mb-5 md:mb-7"> I'm always open to new opportunities or exciting projects that I can collaborate on! Feel free to reach out anytime and I will be happy to have a quick chat.</p>
                {/* Icons for LinkedIn and Github Again (Buttons) */}
                <div className = "flex flex-row justify-center gap-5 ">
                    <a href="https://www.linkedin.com/in/naeemabdullah2002/" target="_blank" rel="noopener noreferrer"
                        className="flex  items-center gap-2 px-5 py-1 max-w-[200px] rounded-full bg-[#f2f3f4] dark:bg-[#e2e2e2] text-[#1d1d1d] font-mono shadow-sm hover:scale-105 hover:shadow-xl transition">
                        <FontAwesomeIcon icon={faLinkedin} className="text-[#0072b1]" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto: abdullahnaeem@hotmail.ca" 
                        className="flex items-center gap-2 px-5 py-1 rounded-full bg-[#f2f3f4] dark:bg-[#e2e2e2] text-[#1d1d1d] font-mono shadow-sm hover:scale-105 hover:shadow-xl dark:shadow-[0_0_5px_rgba(255,255,255,0.2)] transition duration-150">
                        <FontAwesomeIcon icon={faEnvelope} className="text-[#0072b1]" />
                        <span>Email</span>
                    </a>
                </div>
             </div>

            

        </section>
    )
}

export default Contact 