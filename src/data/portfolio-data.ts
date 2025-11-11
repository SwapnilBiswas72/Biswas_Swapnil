export const portfolioData = {
  about: {
    description:
      "I am currently working as a Graduate Research Assistant at the Computer Vision and Image Processing (CVIP) Lab while pursuing my Master of Science in Electrical and Computer Engineering at Southern Illinois University Edwardsville (SIUE). I earned my B.Sc. in Computer Science and Engineering from United International University (UIU), Bangladesh. My research interests span Deep Learning, Medical Image Analysis, Computer Vision, and Image Processing. I am passionate about leveraging AI and machine learning to address medical and industrial challenges through robust and interpretable models.",
    contact: "sbiswas@siue.edu",
    location: "Maryville, IL, USA",
    phone: "+1 (636) 517 7120",
    links: {
      linkedin: "https://www.linkedin.com/in/swapnil-biswas-6447b5218",
      scholar: "https://scholar.google.com/citations?user=-BgBK3kAAAAJ&hl=en&authuser=1",
      portfolio: "https://biswas-swapnil.vercel.app/"
    }
  },

  education: [
    {
      period: "2024–Present",
      degree: "Master of Science in Electrical and Computer Engineering",
      institution: "Southern Illinois University Edwardsville, Illinois, USA",
      cgpa: "3.83/4.00",
      notes: "Completed 18 out of 33 credits"
    },
    {
      period: "2019–2023",
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "United International University, Dhaka, Bangladesh",
      cgpa: "3.88/4.00 (Top 2%)"
    },
    {
      period: "2016–2018",
      degree: "Higher Secondary Certificate",
      institution: "Dhaka City College, Dhaka, Bangladesh",
      cgpa: "5.00/5.00"
    }
  ],

  research_experience: [
    {
      position: "Graduate Research Assistant",
      institution: "CVIP Lab, Southern Illinois University Edwardsville",
      period: "Fall 2024 – Present",
      description: [
        "Enhanced skin lesion segmentation using SAM and MedSAM models with transfer learning to improve diagnostic accuracy.",
        "Addressed class imbalance using Conditional Variational Autoencoders (CVAE), improving VGG-16 classifier robustness.",
        "Modernized legacy CVIP software by replacing ONCRPC with Flatbuffers for 32/64-bit system compatibility.",
        "Developed hybrid image enhancement techniques for thermographic canine bone cancer detection."
      ]
    },
    {
      position: "Research Engineer",
      institution: "Institute for Advanced Research, United International University",
      period: "Mar 2023 – Aug 2024",
      description: [
        "Led an RIC-funded agricultural research project for real-time data-driven advisory to enhance rural productivity.",
        "Collaborated with medical professionals to build a Chronic Kidney Disease (CKD) dataset for early-stage diagnosis.",
        "Conducted a comparative study on Protein Secondary Structure Prediction using GNN and traditional ML algorithms."
      ]
    }
  ],

  professional_experience: [
    {
      position: "Graduate Teaching Assistant",
      institution: "Southern Illinois University Edwardsville",
      period: "Summer 2025 – Present",
      responsibilities: [
        "Assist undergraduate courses, grade assignments, and provide technical and academic support."
      ]
    },
    {
      position: "Junior Software Developer",
      institution: "Amirus, Dhaka",
      period: "2023 – 2024",
      responsibilities: [
        "Developed backend modules, fixed bugs, wrote unit tests, and collaborated in Agile sprints to maintain code quality."
      ]
    },
    {
      position: "Undergraduate Assistant & Grader",
      institution: "United International University",
      period: "2021 – 2023",
      responsibilities: [
        "Graded coursework and assisted in lab sessions, providing guidance on programming concepts and best practices."
      ]
    }
  ],

  publications: [
    {
      title: "Advancing Skin Lesion Classification: The Role of SAM-Based Segmentation in Enhancing Convolutional Neural Network Performance",
      authors: [
        { name: "S. Biswas" },
        { name: "S. M. M. Raza" },
        { name: "T. H. Nguyen" },
        { name: "R. W. LeAnder" },
        { name: "S. E. Umbaugh" }
      ],
      subtitle: "Proc. SPIE 13605, Applications of Digital Image Processing XLVIII (2025), San Diego, CA",
      doi: "https://doi.org/10.1117/12.3065735"
    },
    {
      title: "LVM-Med-Based Thermographic Image Analysis for Canine Bone Cancer Detection",
      authors: [
        { name: "S. M. M. Raza" },
        { name: "S. Biswas" },
        { name: "R. W. LeAnder" },
        { name: "S. E. Umbaugh" }
      ],
      subtitle: "Proc. SPIE 13605, Applications of Digital Image Processing XLVIII (2025)",
      doi: "https://doi.org/10.1117/12.3060176"
    },
    {
      title: "Hybrid Image Enhancement for Thermographic Imaging in Canine Bone Cancer Detection",
      authors: [
        { name: "M. S. U. Hoque" },
        { name: "S. Biswas" },
        { name: "M. S. Sakib" },
        { name: "R. LeAnder" },
        { name: "S. E. Umbaugh" }
      ],
      subtitle: "Thermosense: Thermal Infrared Applications XLVII, Proc. SPIE 13470 (2025)",
      doi: "https://doi.org/10.1109/ICCTA64612.2024.10974770"
    },
    {
      title: "A Bidirectional Siamese RNN for Accurate Gait Recognition",
      subtitle: "Neurocomputing, 2024",
      doi: "https://doi.org/10.1016/j.neucom.2024.128313"
    },
    {
      title: "CropCare: Intelligent Advisory System",
      subtitle: "IEEE ICEEICT, 2024",
      doi: "https://doi.org/10.1109/ICEEICT62016.2024.10534582"
    },
    {
      title: "Predicting Efficient CPU Scheduling Algorithm",
      subtitle: "IEEE STI, 2023",
      doi: "https://doi.org/10.1109/STI59863.2023.10464816"
    },
    {
      title: "Informative Instance-Based KNN for Big Data",
      subtitle: "IEEE I2CT, 2023",
      doi: "https://doi.org/10.1109/I2CT57861.2023.10126147"
    },
    {
      title: "Machine Learning for Load Forecasting in Green Data Center",
      subtitle: "IEEE STI, 2022",
      doi: "https://doi.org/10.1109/STI56238.2022.10103320"
    }
  ],

  under_review: [
    {
      title: "Data-Driven Approaches to Personalized Gamification: Recent Advances, Trends and Future Directions",
      journal: "IEEE Transactions on Human-Machine Systems"
    },
    {
      title: "Personality-Based Preference Prediction in the Metaverse: From Personality Traits to User Engagement",
      journal: "Knowledge and Information Systems (Springer)"
    }
  ],

  projects: [
    {
      title: "Learn and Share",
      description:
        "A PHP-based online education platform providing lectures, e-books, quizzes, and a discussion forum.",
      domain: ["PHP", "MySQL", "HTML", "JavaScript", "Bootstrap"]
    },
    {
      title: "Protibaad",
      description:
        "An anonymous crime-reporting and public safety system enabling real-time alerts and reports.",
      domain: ["PHP", "MySQL", "Bootstrap"]
    },
    {
      title: "IoT-Based Elder Monitoring",
      description:
        "A wearable system using ESP32 and GPS for real-time tracking and fall detection.",
      domain: ["Arduino", "IoT", "C++", "ESP32"]
    },
    {
      title: "COVID-19 Public Safety System",
      description:
        "Arduino-based proximity and health monitoring device for public health safety.",
      domain: ["Arduino", "Sensors", "Microcontrollers"]
    }
  ],

  skills: {
    programming: ["Python", "Java", "C", "C++", "JavaScript"],
    web: ["HTML", "CSS", "PHP"],
    tools: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "MySQL",
      "LaTeX",
      "Google Colab"
    ],
    soft: ["Communication", "Teamwork", "Problem Solving", "Leadership"]
  },

  honors: [
    {
      title: "Research Grants for Graduate Students (RGGS)",
      institution: "Southern Illinois University Edwardsville",
      year: "2025"
    },
    {
      title: "Competitive Graduate Award (CGA)",
      institution: "Southern Illinois University Edwardsville",
      year: "2024"
    },
    {
      title: "Research Grant",
      institution: "Institute for Advanced Research, United International University",
      year: "2023"
    },
    {
      title: "University Merit Scholarship",
      institution: "United International University",
      period: "2019–2023"
    }
  ],

  extracurricular: [
    "President, Bangladesh Student Association (BSA), SIUE",
    "Medical Imaging Campaign Volunteer",
    "Computer Literacy Teacher for Rural Students",
    "Organized Departmental Academic Tours",
    "Conducted Research Data Collection across universities"
  ]
};
