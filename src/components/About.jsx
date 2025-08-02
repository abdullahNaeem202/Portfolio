
function About() {
    return (
      <section
        id="about"
        className="min-h-screen p-5">
        {/* Div That Seperates Heading from Main Content */}
        <div className="md:pt-24 lg:pt-32 px-2 md:px-12 lg:px-24 p-5 md:p-7">
         {/* Section Heading */}
          <h2 className="relative text-lg md:text-2xl font-[650] text-[#2f549f] dark:text-[#9eb9ef] font-mono 
                after:content-[''] after:inline-block after:align-middle after:ml-3 after:h-[2px] after:w-[200px] md:after:w-[450px] lg:after:w-[200px] after:bg-[#3b3c3c] after:dark:bg-[#cccfdb]">
                About Me
          </h2>   
        </div>
        {/* Div That Lays Out Content Using Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.1fr_1fr] gap-8 md:gap-5 lg:gap-3 px-2 md:px-12 lg:px-24">
          {/* Div That Structures each Paraagraph Description About Myself*/}
            <div>
               {/* Paragraph 1 - Introduction*/}
               <p className="dark:text-white text-lg mb-5 w-full max-w-xl md:max-w-2xl lg:max-w-xl">
                  Hi, nice to meet you! I'm Abdullah, an aspiring data analyst based in Richmond BC. 
               </p>
                {/* Paragraph 2 - A bit about my educational background*/}
               <p className="dark:text-white text-lg mb-5 max-w-xl md:max-w-2xl lg:max-w-2xl ">
                  I hold a Bachelor of Science in Data Science with a 
                  minor in Computing Science from Simon Fraser University. I was also honored to receive a  <a href = "https://www.sfu.ca/stat-actsci/all-students/awards/endow.html" target = "_blank" rel = "noopener noreferrer" 
                  className="relative inline-block after:content-[''] after:absolute after:h-[1px] after:left-0 after:bottom-0 after:w-[0px] after:dark:bg-[#9eb9ef] after:bg-[#2f549f] after:transition-[width] after:duration-300
                  hover:after:w-full dark:text-[#9eb9ef] dark:hover:text-[#9eb9ef] hover:text-[#2f549f] text-[#2f549f] font-medium"> departmental award</a>  from the Statistics and Actuarial Science program for the year 2023-2024. 
               </p>
                {/* Paragraph 3 - Hook, what led me to pursue Data Science */}
               <p className="dark:text-white text-lg mb-5 max-w-xl md:max-w-2xl lg:max-w-2xl">
                  "What qualities make a strong data-driven recommendation?", "Why are data scientists essential in driving business growth?". These were questions that sparked my curiosity
                  and led me to pursue Data Science. My passion for solving real-world problems has enabled me to explore areas such as machine learning, business intelligence, and cloud computing.
               </p>
                {/* Paragraph 4 - Leads into the list of technologies */}
               <p className="dark:text-white text-lg mb-5 max-w-xl">
                  Here are a few technologies I've been working with recently:
               </p>
               {/* List - Technologies I have experience with*/}
               <ul className="grid grid-cols-[200px_minmax(150px,_2fr)] md:grid-cols-[250px_minmax(150px,_2fr)] gap-2">
                  <li className="before:content-['▸'] before:dark:text-[#9eb9ef] before:text-md before:mr-2 font-mono text-sm dark:text-white">Python3</li>
                  <li className="before:content-['▸'] before:dark:text-[#9eb9ef] before:text-md before:mr-2 font-mono text-sm dark:text-white">JavaScript</li>
                  <li className="before:content-['▸'] before:dark:text-[#9eb9ef] before:text-md before:mr-2 font-mono text-sm dark:text-white">R</li>
                  <li className="before:content-['▸'] before:dark:text-[#9eb9ef] before:text-md before:mr-2 font-mono text-sm dark:text-white">Firebase</li>
                  <li className="before:content-['▸'] before:dark:text-[#9eb9ef] before:text-md before:mr-2 font-mono text-sm dark:text-white">HTML/CSS</li>
                  <li className="before:content-['▸'] before:dark:text-[#9eb9ef] before:text-md before:mr-2 font-mono text-sm dark:text-white">Power BI</li>
               </ul>

            </div>
             {/* Div That acts as a spacing between the paragraphs and the image*/}
            <div className="hidden md:block">
            </div>
            {/* Div That contains the image */}
            <div className="flex items-center justify-center max-w-[350px] md:max-w-2xl lg:max-w-[300px] mt-6 lg:mt-0">
               <img className = "rounded-lg max-w-[200px] md:max-w-[275px] lg:max-w-[325px] dark:shadow-[0_0_5px_rgba(255,255,255,0.2)] shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
               src='/picture.jpg' 
               alt = 'Profile Picture' 
               loading='lazy'>
               </img>
            </div>
        </div>
      </section>
    );
  }
  

export default About