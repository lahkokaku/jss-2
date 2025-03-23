import FeaturedProject from '@/types/data/FeaturedProjects'

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Jss 2',
    slug: 'jss-2',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS'],
    shortDescription: `Second iteration of my personal website made with React.js and TypeScript.`,
    description: {
      introduction: `Second iteration of my personal website made with React.js and TypeScript, featuring a Glassmorphism UI design. This website showcases some of the projects I developed and also provide ways to contact me.`,
    },
    codeDisclaimer: false,
    linkCode: [
      {
        type: 'Code',
        link: 'https://github.com/lahkokaku/jss-2'
      }
    ],
    linkWeb: 'https://lahkokaku.github.io',
    thumbnail: 'jss-2-home.webp',
    interfaces: [
      {
        description: 'Home Page',
        link: 'jss-2-home.webp'
      },
      {
        description: 'Featured Projects Page',
        link: 'jss-2-featured-projects.webp'
      },
      {
        description: 'Project Detail',
        link: 'jss-2-project-detail.webp'
      }
    ]
  },
  {
    title: 'Zeal',
    slug: 'zeal',
    techStack: ['React.js', 'Next.js', 'NextAuth', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'MUI'],
    shortDescription: `Online learning platform with integrated features to streamline student's learning process.`,
    description: {
      introduction: `A project made for my thesis. For this project, we made an online learning platform that has all of the features that student's need when they are studying. Therefore they can use this application as one stop solution without having the need to switch between multiple applications. Some of those features are <b>courses</b>, <b>notes</b>, <b>forum</b>, <b>schedule</b>, and <b>contact</b> (student can chat and call with each other).`,
      role: 'It was developed by a team of 3 person. We did the research, requirements gathering, system design, code development, testing, and evaluation of the application. During development, I was mainly in charge of the contact feature as well as helping other member to fix bugs.'
    },
    codeDisclaimer: false,
    linkCode: [
      {
        type: 'Code',
        link: 'https://github.com/guidowilliam11/e-learning'
      }

    ],
    linkWeb: null,
    thumbnail: 'zeal-dashboard.webp',
    interfaces: [
      {
        description: 'Dashboard Page',
        link: 'zeal-dashboard.webp'
      },
      {
        description: 'Courses Page',
        link: 'zeal-courses.webp'
      },
      {
        description: 'Sessions in Courses',
        link: 'zeal-courses-sessions.webp'
      },
      {
        description: 'Notes Page',
        link: 'zeal-notes.webp'
      },
      {
        description: 'Editor for Note',
        link: 'zeal-notes-editor.webp'
      },
      {
        description: 'Forum Page',
        link: 'zeal-forum.webp'
      },
      {
        description: 'Forum Post',
        link: 'zeal-forum-post.webp'
      },
      {
        description: 'Schedule Page',
        link: 'zeal-schedule.webp'
      },
      {
        description: 'Contact Page',
        link: 'zeal-contact.webp'
      },
      {
        description: 'Call Pop Up',
        link: 'zeal-contact-call.webp'
      },
    ]
  },
  {
    title: '2023 BNEC Recruitment',
    slug: '2023-bnec-recruitment',
    techStack: ['VueJS', 'Tailwind CSS', 'Laravel', 'MySQL'],
    shortDescription: 'Web Application to accomodate various registration processes for BNEC Entities.',
    description: {
      introduction: 'As the Assistant Manager of BNEC\'s 30th IT Division, my main task was to develop the Recruitment Website using a service oriented architechture with APIs. We used VueJS, Laravel, Tailwind CSS, MySQL. This website has features to accommodate registration processes for both registrants and admins. For registrants there are features like TOEFL registration forms, payment forms, and so on. For admins, there are features for managing registrant details, member payments, environments, and so on.',
      role: 'My role was to lead the development team from Kemanggisan Region, plan the code implementation, and implement the code on both VueJS & Laravel. I was in charge of making all of the admin features, authentication, and implementing the code for UI designs.'
    },
    codeDisclaimer: true,
    linkCode: null,
    linkWeb: 'https://recruitment.mybnec.org',
    thumbnail: '2023-bnec-recruitment-thumb.webp',
    interfaces: [
      {
        description: 'Landing Page',
        link: '2023-bnec-recruitment-landing-page.webp'
      },
      {
        description: 'TOEFL Registration Form',
        link: '2023-bnec-recruitment-toefl-registration.webp'
      },
      {
        description: 'User Dashboard',
        link: '2023-bnec-recruitment-user-dashboard.webp'
      },
      {
        description: 'Admin Dashboard',
        link: '2023-bnec-recruitment-admin-dashboard.webp'
      }
    ]
  },
  {
    title: '2023 School English Olympics',
    slug: '2023-school-english-olympics',
    techStack: ['Bootstrap', 'Laravel', 'MySQL'],
    shortDescription: 'Web Application to accomodate registration process for the 2023 School English Olympics.',
    description: {
      introduction: 'The 2023 School English Olympics is website to accomodate the registration processes for an english competition held by BNEC Bekasi. It mainly serves as an information center for the registrants. It also have several admin features to manage the FAQs and sponsors on the landing page.',
      role: 'I was in charge of implementing the sponsors feature and helping some code implementations for the UI.'
    },
    codeDisclaimer: true,
    linkCode: null,
    linkWeb: 'https://seo.mybnec.org',
    thumbnail: '2023-seo-thumb.webp',
    interfaces: [
      {
        description: 'Landing Page',
        link: '2023-seo-landing-page.webp'
      },
    ]
  },
  {
    title: 'Indonesian Youth Olympics',
    slug: 'indonesian-youth-olympics',
    techStack: ['Bootstrap', 'Laravel', 'MySQL'],
    shortDescription: 'Web Application that acts as a competition portal where you can find and register for competitions.',
    description: {
      introduction: 'This web application was made as the final project of Software Engineering Course. The Indonesian Olympics is website that acts a portal for competitions. You can find various competitions here and register for the competition. It also have admin features to manage the Competitions, Payments, and Participants.',
      role: 'I was in charge of designing the Use Case Diagram, Entity Relation Ship Diagram, and implementing the codes for those designs.'
    },
    codeDisclaimer: false,
    linkCode: [
      {
        type: 'Code',
        link: 'https://github.com/lahkokaku/rm22_app'
      }
    ],
    linkWeb: null,
    thumbnail: 'iyo-thumb.webp',
    interfaces: [
      {
        description: 'Landing Page',
        link: 'iyo-landing-page.webp'
      },
      {
        description: 'Competitions List Page',
        link: 'iyo-competitions-list.webp'
      },
      {
        description: 'Competitions Registration Form Page',
        link: 'iyo-competition-registration-form.webp'
      },
      {
        description: 'Admin Dashboard',
        link: 'iyo-admin-dashboard.webp'
      },
    ]
  },
  {
    title: 'Piscis Aquarium',
    slug: 'piscis-aquarium',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    shortDescription: 'A simple encylopedia website about marine animals.',
    description: {
      introduction: 'This was a project made for the final assignment of the Human & Computer Interaction Laboratory Class. It was made using pure HTML, CSS, and JavaScript',
      role: 'I was in charge making the whole thing as it was an individual project.',
    },
    codeDisclaimer: false,
    linkCode: [
      {
        type: 'Code',
        link: 'https://github.com/lahkokaku/piscis-aquarium'
      }
    ],
    linkWeb: null,
    thumbnail: 'piscis-aquarium-thumb.webp',
    interfaces: [
      {
        description: 'Landing Page',
        link: 'piscis-aquarium-landing.webp'
      },
      {
        description: 'Encyclopedia Page',
        link: 'piscis-aquarium-encyclopedia.webp'
      },
      {
        description: 'About Us Page',
        link: 'piscis-aquarium-about-us.webp'
      },
      {
        description: 'Contact Us Page',
        link: 'piscis-aquarium-contact-us.webp'
      }
    ]
  }
]