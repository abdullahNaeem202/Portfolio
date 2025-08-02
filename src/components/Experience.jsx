import { useState } from "react";
import { useEffect } from "react";

function Experience () {
    // create a tabs array to store ids and titles for each button 
    const tabs = [
        {
            id: 0, 
            title: "Statistics Canada",
            content: (
            <div>
                <h3 className = 'text-lg lg:w-[450px] md:w-[427px] mb-2 md:mb-3'> <span className = 'text-[#2f549f] dark:text-[#9eb9ef] font-bold'>Statistics Analyst Intern&nbsp; </span> 
                <a href = "https://www150.statcan.gc.ca/n1/edu/power-pouvoir/ch3/5214780-eng.htm" target = "_blank" rel = "noopener noreferrer" 
                className="relative inline-block after:content-[''] after:absolute after:h-[0.5px] after:left-0 after:bottom-0 after:w-[0px] after:dark:bg-[#c28fd4] after:bg-[#874aa0] after:transition-[width] after:duration-300
                hover:after:w-full dark:text-[#cd9dde] dark:hover:text-[#cd9dde] hover:text-[#874aa0] text-[#874aa0] font-semibold font-mono"> @ Statistics Canada</a></h3>
                <p className = 'text-md font-normal mb-3 md:mb-5 lg:mb-3 dark:text-white'>January 2023 - April 2023</p>
                <ul>
                    <li className="before:content-['▸'] before:text-3xl before:mr-2 before:dark:text-[#9eb9ef] dark:text-white indent-[-1.45em] pl-7 md:w-[390px] lg:w-[660px] md:text-md lg:text-lg"> Performed a compression analysis on a variety of file types and reduced file sizes by 40%, leading to cost savings in cloud services costs and speeding up workflows.</li>
                    <li className = "before:content-['▸'] before:text-3xl before:mr-2 before:dark:text-[#9eb9ef] dark:text-white indent-[-1.45em] pl-7 md:w-[390px] lg:w-[660px] md:text-md lg:text-lg"> Resolved issues in the internal StatsCan record matching platform (CanSIS) related to repeated record identifiers, improving matching accuracy by 15% and leading to a recommended solution that was implemented by my division. </li>
                    <li className = "before:content-['▸'] before:text-3xl before:mr-2 before:dark:text-[#9eb9ef] dark:text-white indent-[-1.45em] pl-7 md:w-[390px] lg:w-[660px] md:text-md lg:text-lg"> Improved an address parser by utilizing regular expressions to successfully identify 365,169 incorrect address formats, boosting the tool’s overall accuracy and reliability. </li>
                </ul>
            </div>
            )
        },
        {
            id:1, 
            title: "SFU Data Science Student Society",
            content: (
                <div>
                    <h3 className = 'text-lg lg:w-[450px] md:w-[325px mb-2 md:mb-3'> <span className="text-[#2f549f] dark:text-[#9eb9ef] font-bold">Director of Events&nbsp;  </span>
                    <a href = "https://linktr.ee/sfudssspanda?utm_source=linktree_profile_share&ltsid=031cb608-c6f2-4e93-9fef-55a962545f54" target = "_blank" rel = "noopener noreferrer" 
                    className="relative inline-block after:content-[''] after:absolute after:h-[0.5px] after:left-0 after:bottom-0 after:w-[0px] after:dark:bg-[#cea6dc] after:bg-[#874aa0] after:transition-[width] after:duration-300
                    hover:after:w-full dark:text-[#cd9dde] dark:hover:text-[#cd9dde] hover:text-[#874aa0] text-[#874aa0] font-semibold font-mono" > @ SFU DSSS</a> </h3>
                    <p className = 'text-md font-normal mb-3 md:mb-5 lg:mb-3 dark:text-white'>April 2022 - April 2025</p>
                    <ul>
                    <li className="before:content-['▸'] before:text-3xl before:mr-2 before:dark:text-[#9eb9ef] dark:text-white indent-[-1.45em] pl-7 md:w-[390px] lg:w-[660px] md:text-md lg:text-lg"> Organized and led 5+ events for the Data Science program at SFU, 
                    including discussion panels with industry professionals and technical workshops, helping to strengthen community engagement and enhance learning opportunities for Data Science undergraduates.</li>
                    <li className="before:content-['▸'] before:text-3xl before:mr-2 before:dark:text-[#9eb9ef] dark:text-white indent-[-1.45em] pl-7 md:w-[390px] lg:w-[660px] md:text-md lg:text-lg"> Developed targeted outreach strategies that doubled student engagement for events, leading to consistently high turnout. </li>
                    <li className="before:content-['▸'] before:text-3xl before:mr-2 before:dark:text-[#9eb9ef] dark:text-white indent-[-1.45em] pl-7 md:w-[390px] lg:w-[660px] md:text-md lg:text-lg"> Supported the onboarding for new team members, helping to build a more connected student community. </li>
                    </ul>
                </div>
            )
        },
    ];

    // state and setter for determining which button is active
    const [SelectedTab, setSelectedTab] = useState(0)
    
    return (
        <section id = 'experience' className="min-h-screen md:pt-40 lg:pt-52 pt-28 p-5">
            {/* Div That Seperates Heading from Main Content */}
            <div className="px-2 md:px-12 lg:px-40 p-5 md:p-7 mb-3 md:mb-2">
                {/* Section Heading */}
                <h2 className="relative text-lg md:text-2xl font-[650] text-[#2f549f] dark:text-[#9eb9ef] font-mono
                after:content-[''] after:inline-block after:align-middle after:ml-3 after:h-[2px] after:w-[100px] md:after:w-[300px] lg:after:w-[200px] after:bg-[#3b3c3c] after:dark:bg-[#cccfdb]">My Career Journey
                </h2>
            </div>
            {/* Div That Stores Each Button and Content Section placed to the right of the buttons*/}
            <div className="flex flex-col md:flex-row gap-5 p-5 md:p-7 px-2 md:px-12 lg:px-40">
                {/* Div That Contains Each Button*/}
                <div className="flex max-w-[400px] md:max-w-[450px] lg:max-w-3xl md:flex-col gap-3 items-start">   
                    {tabs.map((tab, index) => {
                        return (
                        <div key = {index} className="relative ">
                            {SelectedTab === tab.id && (
                                <>
                                     <span
                                       className="absolute hidden md:block -left-2 top-0 h-full w-[2px] bg-[#2f549f] dark:bg-[#9eb9ef]"
                                    />
                                    <span 
                                     className="absolute md:hidden block -bottom-2 left-0 w-full h-[2px] bg-[#2f549f] dark:bg-[#9eb9ef]"
                                    />
                                 </>
                             )}
                        <button 
                            
                            onClick = {() => {
                                setSelectedTab(tab.id);
                        }} 
                        className = {`rounded font-semibold w-full break-words text-center ${
                            SelectedTab === tab.id ? "bg-[#b5b8bb] dark:bg-[#384256] p-2  dark:text-white text-[#2e2f2f]" : "bg-[#d9dde0] dark:bg-[#1a202c] p-2 text-black dark:text-white"}`}
                        >
                            {tab.title} </button> </div> )
                    })}
                </div>
                <div className = "flex flex-col md:max-w-2xl lg:max-w-3xl p-5 md:p-2 ">
                    {/* Div That Contains the Content for both tabs (shown differently depending on which one is selected */}
                    <div  key = {SelectedTab} className="max-w-3xl md:max-w-2xl animate-content-fade">
                        {tabs[SelectedTab].content}
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Experience