

// Card data for each project will be stored here and then imported into projects.jsx 

const cardData = [
    {
        id:1,
        // project title
        title: "SFU Transit Time Estimator - Fall Hacks Hackathon (2nd Place)",
        // project description
        description: "An interactive map-based application built using Python and Tkinter that estimates the commute time between SFU Burnaby campus and West Hastings Street, Vancouver. Real-time bus data was gathered from the Translink API. Parsed XML responses via BeautifulSoup to improve the accuracy of travel time estimates.",
         // project demo video
        demo_video: "/tkinter_demos.mp4",
        // tools used for the project
        techStack: [
            "Python",
            "BeautifulSoup4", 
            "Tkinter",
            "Requests"
        ],
        // github link for project
        GitHubLink: 'https://github.com/abdullahNaeem202/SFU-Transit-Time-Estimator'
    },
    {
        id:2,
        title: "Analysis on Customer Lifetime Value (CLTV)",
        description: "An end-to-end Python pipeline that estimates CLTV and churn rate for a mobile game developed by a start-up based on 6 weeks of data collected from ironSource and Google Analytics 4. Cleaned and analyzed data using Pandas and NumPy, and visualized CLTV and churn rate trends using Seaborn and Matplotlib.",
        image: "/Time_Series_Plots.png",
        techStack: [
            "Python",
            "Pandas", 
            "NumPy",
            "Seaborn",
            "Matplotlib",
            "Google Analytics 4"
        ],
    }
    ,
    {
        id: 3,
        title: "Customer Churn Prediction",
        description: "Built a churn prediction model using the data analysis pipeline for a telecom company based on a sample dataset from Kaggle. Achieved 90% validation accuracy with Gradient Boosted Trees. Engineered key features such as monthly bill, call frequency, and data usage to improve model performance. Compared results across multiple classifiers including KNN, Decision Trees, and Random Forests.",
        image: "/Validation_Scores_barplot.png",
        techStack: [
            "Python",
            "Scikit-Learn",
            "Scipy",
            "Pandas",
            "Seaborn",
            "Matplotlib"
        ],
        GitHubLink: "https://github.com/abdullahNaeem202/Analysis-On-Customer-Churn-"
    }
    ,
    {
        id: 4,
        title: "ICBC Vehicle Prediction Model",
        description: "By exploring vehicle population data published by ICBC on Tableau Public, developed a pipeline that involved data cleaning, data visualization, and data analysis to predict vehicle type. Data visualization was done in PowerBI. Data cleaning and processing was done with Pandas, Numpy, and Scikit-Learn.",
        image: "/PowerBI_Dashboard.png", // add power bi dashboard image here later
        techStack: [
            "Python",
            "R",
            "Power BI",
            "Scikit-Learn",
            "Scipy",
            "Pandas",
            "NumPy",
            "Seaborn",
            "Matplotlib"
        ],
        GitHubLink: "https://github.com/abdullahNaeem202/ICBC-Vehicle-Prediction-Model"
    }
]


export default cardData 