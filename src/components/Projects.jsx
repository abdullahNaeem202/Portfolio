import cardData from '../data/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects () {
    return (
        <section id = 'projects' className="min-h-screen md:pt-5 lg:pt-52 pt-28 p-5">
            {/* Div That Seperates Heading from Main Content */}
            <div className="px-2 md:px-12 lg:px-28 md:p-7 p-5 md:mb-5 mb-5">
                 {/* Section Heading */}
                 <h2 className="relative md:text-2xl text-lg font-[650] text-[#2f549f] dark:text-[#9eb9ef] font-mono after:content-[''] 
                 after:inline-block after:align-middle after:ml-3 after:h-[2px] after:w-[200px] md:after:w-[450px] lg:after:w-[200px] after:bg-[#3b3c3c] after:dark:bg-[#cccfdb]">Projects
                 </h2>
            </div>
            {/* Div That Contains Each Project Card */}
            <div className = "md:px-28 grid grid-cols-1 space-y-7 md:space-y-7">
                {/* Div that will display information about each project - horizontally layed out on desktop, vertically layed out on mobile*/}
                {cardData.map(project => (
                    <div
                        key = {project.id} 
                        className = "flex flex-col max-w-4xl mx-auto md:flex-row text-left dark:bg-[#a2b2d3] bg-[#96aedd] rounded-lg shadow-md transition duration-200 ease-in-out hover:shadow-xl dark:shadow-[0_0_5px_rgba(255,255,255,0.2)] hover:-translate-y-1">
                     {/* Div that will contain the video for each project */}
                    {/* <div className='border border-green-500 md:w-3/4 w-full md:pr-2'> */}
                    <div className='flex justify-center items-center rounded-lg p-2 lg:p-2 max-w-full transition-all duration-300'>
                        {/* demo video or image */ }
                        {project.demo_video ? (
                            //  <video src = {project.demo_video} controls loop playsInline muted className='rounded-lg'></video>
                            // 'block w-full h-auto rounded-lg max-w-[325px] lg:max-w-[600px]'
                            <video src = {project.demo_video} controls loop playsInline muted className='block lg:block md:hidden w-full h-auto rounded-lg max-w-[350px] lg:max-w-[600px]'></video> 
                        ) : project.image ? (
                            // <img src = {project.image} alt = {`${project.title} preview`} className = "rounded-lg"></img>
                            <img src = {project.image} alt = {`${project.title} preview`} className = "block lg:block md:hidden w-full h-auto max-w-[450px] lg:max-w-[800px] rounded-lg "></img>
                        ) : null }
                    </div>
                    {/* Div that will contain content block for each project */}
                    <div className='flex p-2 flex-col'>
                        {/* project title */}
                        <h3 className='font-bold md:text-lg mb-3'>{project.title}</h3>
                        {/* a short description of the project*/}
                        <p className = 'md:max-w-5xl mb-4 md:mb-4'>{project.description}</p>
                        {/* tech stack list and github link (if included)*/}
                        <div className='flex flex-row flex-wrap gap-y-2 items-center'>
                            {project.techStack.map((tech, index) => (
                                <span
                                    key = {index}
                                    className = "inline-block px-3 py-1 md:text-sm font-medium rounded-full mr-3 dark:bg-[rgb(237,237,238)] bg-[#d9dde0] ">
                                        {tech}
                                </span>
                            ))}
                            {project.GitHubLink && (
                                <a href = {project.GitHubLink} target = "_blank" rel = "noopener noreferrer" aria-label = "GitHub" className = 'delay-75 duration-100 ease-in-out'> 
                                <FontAwesomeIcon icon = {faGithub} size = '2x' className='transition hover:-translate-y-1 text-[#1a3467]  hover:text-black dark:text-black dark:hover:text-[#2e2f2f]'/></a>
                            )}
                        </div>
                
                    </div>
                </div>
                ))}
               
            </div>

        </section>
    ) 
}
export default Projects 
