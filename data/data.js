import { Behance, Facebook, Github, LinkedIn } from './svgImages'

// Navbar Data
export const menuData = {
  logoLight: '/images/logo.svg',
  logoDark: '/images/logo-light.svg',
  btnLlink: '/request-demo',
  menuContent: [
    {
      id: 1,
      title: 'Home',
      submenu: [
        {
          id: 1.1,
          title: 'Home 1',
          path: '/',
          newTab: false,
        },
        {
          id: 1.2,
          title: 'Home 2',
          path: '/home-2',
          newTab: false,
        },
        {
          id: 1.3,
          title: 'Home 3',
          path: '/home-3',
          newTab: false,
        },
        {
          id: 1.4,
          title: 'Home 4',
          path: '/home-4',
          newTab: false,
        },
        {
          id: 1.5,
          title: 'Home 5',
          path: '/home-5',
          newTab: false,
        },
      ],
    },
    {
      id: 2,
      title: 'About',
      path: '/about',
      newTab: false,
    },
    {
      id: 3,
      title: 'Services',
      path: '/services',
      newTab: false,
    },
    {
      id: 4,
      title: 'Pages',
      submenu: [
        {
          id: 4.1,
          title: 'Team',
          path: '/teams',
          newTab: false,
        },
        {
          id: 4.2,
          title: 'Team details',
          path: '/teams/1',
          newTab: false,
        },
        {
          id: 4.3,
          title: 'Testimonials',
          path: '/testimonial',
          newTab: false,
        },
        {
          id: 4.4,
          title: 'Integration',
          path: '/integration',
          newTab: false,
        },
        {
          id: 4.5,
          title: 'FAQs',
          path: '/faq',
          newTab: false,
        },
        {
          id: 4.6,
          title: 'Pricing',
          path: '/price',
          newTab: false,
        },
        {
          id: 4.7,
          title: 'Career',
          path: '/career',
          newTab: false,
        },
        {
          id: 4.8,
          title: 'Career Single',
          path: '/career/business-administrator',
          newTab: false,
        },
        {
          id: 4.9,
          title: 'login',
          path: '/login',
          newTab: false,
        },
        {
          id: 4.11,
          title: 'Sign Up',
          path: '/signup',
          newTab: false,
        },
        {
          id: 4.12,
          title: '404',
          path: '/not-found',
          newTab: false,
        },
      ],
    },
    {
      id: 5,
      title: 'News',
      submenu: [
        {
          id: 5.1,
          title: 'blog grid',
          path: '/blog',
          newTab: false,
        },
        {
          id: 5.2,
          title: 'Blog list',
          path: '/blog-list',
          newTab: false,
        },
        {
          id: 5.3,
          title: 'Blog categories',
          path: '/categories/Marketing',
          newTab: false,
        },
        {
          id: 5.4,
          title: 'Blog tags',
          path: '/tags/Benefits',
          newTab: false,
        },
      ],
    },
    {
      id: 6,
      title: 'Contact Us',
      path: '/contact',
      newTab: false,
    },
  ],
}
// Clients
export const ClientData = [
  {
    id: 1,
    imageLight: '/images/clients/group.svg',
    imageDark: '/images/clients/group-dark.svg',
  },
  {
    id: 2,
    imageLight: '/images/clients/infinity.svg',
    imageDark: '/images/clients/infinity-dark.svg',
  },
  {
    id: 3,
    imageLight: '/images/clients/artifact.svg',
    imageDark: '/images/clients/artifact-dark.svg',
  },
  {
    id: 4,
    imageLight: '/images/clients/caudile.svg',
    imageDark: '/images/clients/caudile-dark.svg',
  },
  {
    id: 5,
    imageLight: '/images/clients/axeptio.svg',
    imageDark: '/images/clients/axeptio-dark.svg',
  },
  {
    id: 6,
    imageLight: '/images/clients/mfinity.svg',
    imageDark: '/images/clients/mfinity-dark.svg',
  },
]

export const ServiceData = [
  {
    id: 1,
    slug: 'web-design',
    title: 'Web Design',
    excerpt: 'Creating stunning, responsive, and user-friendly websites tailored to your needs.',
    iconLight: '/images/services/web-design.svg',
    iconDark: '/images/services/web-design-dark.svg',
    featureImage: '/images/services/service-web-design.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Our web design service ensures your website is visually appealing, easy to navigate, and optimized for all devices. We combine aesthetics with functionality to provide an engaging user experience.',
    serviceExpectation:
      'Expect a website that not only looks great but also performs seamlessly. Our designs are crafted to enhance user engagement and drive conversions.',
    serviceExpectationList: [
      {
        item: 'Responsive and user-friendly design',
      },
      {
        item: 'Optimized for all devices',
      },
      {
        item: 'SEO-friendly architecture',
      },
    ],
    serviceQualifications:
      'Our team of expert designers and developers are skilled in the latest web technologies and design trends, ensuring your website stands out in a crowded digital landscape.',
    serviceQualificationsList: [
      {
        item: 'Expertise in modern web technologies',
      },
      {
        item: 'Focus on user experience and performance',
      },
      {
        item: 'Customizable solutions to meet your specific needs',
      },
    ],
  },
  {
    id: 2,
    slug: 'ai-integration',
    title: 'AI Integration',
    excerpt: 'Leveraging the power of AI to transform your business operations and decision-making.',
    iconLight: '/images/services/ai-integration.svg',
    iconDark: '/images/services/ai-integration-dark.svg',
    featureImage: '/images/services/service-ai-integration.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Our AI integration service helps you harness the power of artificial intelligence to enhance productivity, improve customer experiences, and gain valuable insights from your data.',
    serviceExpectation:
      'We deliver AI solutions that are scalable, secure, and tailored to your business needs, ensuring you stay ahead in a rapidly evolving technological landscape.',
    serviceExpectationList: [
      {
        item: 'Custom AI solutions',
      },
      {
        item: 'Data-driven decision making',
      },
      {
        item: 'Enhanced customer experiences',
      },
    ],
    serviceQualifications:
      'Our AI experts are proficient in machine learning, natural language processing, and other advanced AI technologies, enabling us to provide cutting-edge solutions that drive real business value.',
    serviceQualificationsList: [
      {
        item: 'Proficiency in advanced AI technologies',
      },
      {
        item: 'Focus on delivering tangible business value',
      },
      {
        item: 'Secure and scalable AI solutions',
      },
    ],
  },
  {
    id: 3,
    slug: 'custom-software',
    title: 'Custom Software Development',
    excerpt: 'Building tailored software solutions to meet your unique business requirements.',
    iconLight: '/images/services/custom-software.svg',
    iconDark: '/images/services/custom-software-dark.svg',
    featureImage: '/images/services/service-custom-software.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'We offer custom software development services to create applications that are perfectly aligned with your business goals. From concept to deployment, we handle every aspect of the development process.',
    serviceExpectation:
      'Expect software that is tailored to your specific needs, scalable, and easy to integrate with your existing systems. Our solutions are designed to enhance efficiency and drive growth.',
    serviceExpectationList: [
      {
        item: 'Tailored software solutions',
      },
      {
        item: 'Scalable and robust applications',
      },
      {
        item: 'Seamless integration with existing systems',
      },
    ],
    serviceQualifications:
      'Our development team has extensive experience in a wide range of programming languages and frameworks, allowing us to build high-quality, reliable software that meets your exact specifications.',
    serviceQualificationsList: [
      {
        item: 'Expertise in various programming languages',
      },
      {
        item: 'Focus on reliability and performance',
      },
      {
        item: 'Customizable to meet your business needs',
      },
    ],
  },
  {
    id: 4,
    slug: 'app-development',
    title: 'App Development',
    excerpt: 'Creating custom mobile and web applications tailored to your business needs.',
    iconLight: '/images/services/app-development.svg',
    iconDark: '/images/services/app-development-dark.svg',
    featureImage: '/images/services/service-app-development.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Our app development service offers end-to-end solutions for creating high-quality mobile and web applications. From initial concept to deployment and maintenance, we handle every aspect to ensure your app meets all your requirements.',
    serviceExpectation:
      'Expect a custom-built application that is user-friendly, scalable, and secure. Our apps are designed to enhance user engagement and provide a seamless user experience.',
    serviceExpectationList: [
      {
        item: 'Custom mobile and web applications',
      },
      {
        item: 'User-friendly and intuitive design',
      },
      {
        item: 'Secure and scalable solutions',
      },
    ],
    serviceQualifications:
      'Our team of experienced developers is proficient in the latest technologies and frameworks, ensuring that your application is built to the highest standards of quality and performance.',
    serviceQualificationsList: [
      {
        item: 'Expertise in modern development frameworks',
      },
      {
        item: 'Focus on performance and security',
      },
      {
        item: 'Tailored to your business needs',
      },
    ],
  },
  {
    id: 5,
    slug: 'e-commerce-solutions',
    title: 'E-Commerce Solutions',
    excerpt: 'Empowering your business with robust and scalable e-commerce platforms.',
    iconLight: '/images/services/e-commerce.svg',
    iconDark: '/images/services/e-commerce-dark.svg',
    featureImage: '/images/services/service-e-commerce.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Our e-commerce solutions provide comprehensive services to build, manage, and grow your online store. We offer customizable and scalable platforms designed to enhance customer engagement and drive sales.',
    serviceExpectation:
      'Expect a full-featured e-commerce platform with a seamless shopping experience, secure payment gateways, and efficient order management systems. Our solutions are tailored to meet the unique needs of your business.',
    serviceExpectationList: [
      {
        item: 'Customizable and scalable platforms',
      },
      {
        item: 'Secure payment gateways',
      },
      {
        item: 'Efficient order management systems',
      },
    ],
    serviceQualifications:
      'With extensive experience in e-commerce development, our team ensures that your online store is built with the latest technologies, offering high performance and reliability to meet the demands of your customers.',
    serviceQualificationsList: [
      {
        item: 'Expertise in e-commerce development',
      },
      {
        item: 'High performance and reliability',
      },
      {
        item: 'Tailored to your business needs',
      },
    ],
  },
  {
    id: 6,
    slug: 'seo',
    title: 'SEO Services',
    excerpt: 'Boost your online visibility and drive organic traffic with our expert SEO strategies.',
    iconLight: '/images/services/seo.svg',
    iconDark: '/images/services/seo-dark.svg',
    featureImage: '/images/services/service-seo.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Our SEO services are designed to enhance your website’s visibility on search engines, driving more organic traffic and increasing your online presence. We use the latest techniques and best practices to ensure your site ranks high in search results.',
    serviceExpectation:
      'Expect a significant improvement in your search engine rankings, increased website traffic, and higher conversion rates. Our SEO strategies are customized to meet your specific business goals.',
    serviceExpectationList: [
      {
        item: 'Comprehensive keyword research',
      },
      {
        item: 'On-page and off-page optimization',
      },
      {
        item: 'Continuous performance tracking and reporting',
      },
    ],
    serviceQualifications:
      'Our team of SEO experts stays updated with the latest trends and algorithm changes to provide effective and up-to-date optimization techniques. We focus on delivering long-term results that help your business grow.',
    serviceQualificationsList: [
      {
        item: 'Expertise in latest SEO trends',
      },
      {
        item: 'Focus on long-term results',
      },
      {
        item: 'Customized strategies for your business',
      },
    ],
  },
  {
    id: 7,
    slug: 'robotics-solutions',
    title: 'Robotics Solutions',
    excerpt: 'Innovative robotics solutions to automate tasks and enhance efficiency.',
    iconLight: '/images/services/robotics.svg',
    iconDark: '/images/services/robotics-dark.svg',
    featureImage: '/images/services/service-robotics.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Our robotics solutions are designed to automate processes, improve precision, and enhance operational efficiency. We offer custom robotics systems tailored to your specific industry and business needs.',
    serviceExpectation:
      'Expect advanced robotic systems that integrate seamlessly with your operations, delivering increased productivity and reduced manual labor. Our solutions are designed for scalability and adaptability.',
    serviceExpectationList: [
      {
        item: 'Custom robotics systems',
      },
      {
        item: 'Enhanced automation and efficiency',
      },
      {
        item: 'Scalable and adaptable solutions',
      },
    ],
    serviceQualifications:
      'Our team of robotics experts combines cutting-edge technology with practical experience to provide robust solutions that meet your automation goals. We focus on delivering high-quality, reliable systems.',
    serviceQualificationsList: [
      {
        item: 'Expertise in advanced robotics technology',
      },
      {
        item: 'High reliability and precision',
      },
      {
        item: 'Tailored solutions for your industry',
      },
    ],
  },
  {
    id: 8,
    slug: 'saas-solutions',
    title: 'SaaS Solutions',
    excerpt: 'Flexible and scalable SaaS solutions to streamline your business operations.',
    iconLight: '/images/services/saas.svg',
    iconDark: '/images/services/saas-dark.svg',
    featureImage: '/images/services/service-saas.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Our SaaS solutions provide scalable, cost-effective software services delivered via the cloud. We offer custom SaaS applications that enhance your business processes and support growth.',
    serviceExpectation:
      'Expect a seamless SaaS experience with scalable applications, reliable performance, and easy integration with your existing systems. Our solutions are designed to adapt to your business needs.',
    serviceExpectationList: [
      {
        item: 'Scalable cloud-based applications',
      },
      {
        item: 'Cost-effective solutions',
      },
      {
        item: 'Easy integration and management',
      },
    ],
    serviceQualifications:
      'Our SaaS solutions are built with the latest cloud technologies and designed for high performance and security. We ensure that your software is reliable, secure, and aligned with your business objectives.',
    serviceQualificationsList: [
      {
        item: 'Advanced cloud technology',
      },
      {
        item: 'Focus on performance and security',
      },
      {
        item: 'Customizable to your business needs',
      },
    ],
  },
  {
    id: 9,
    slug: 'smart-personal-portfolio',
    title: 'Smart Personal Portfolio',
    excerpt: 'Showcase your skills and achievements with a cutting-edge personal portfolio.',
    iconLight: '/images/services/portfolio.svg',
    iconDark: '/images/services/portfolio-dark.svg',
    featureImage: '/images/services/service-portfolio.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Our Smart Personal Portfolio service helps you create an impressive online portfolio that highlights your skills, achievements, and projects. We offer customizable designs and advanced features to make your portfolio stand out.',
    serviceExpectation:
      'Expect a professional, user-friendly portfolio that effectively showcases your personal brand and achievements. Our solutions include interactive features and responsive designs tailored to your needs.',
    serviceExpectationList: [
      {
        item: 'Customizable portfolio designs',
      },
      {
        item: 'Interactive and responsive features',
      },
      {
        item: 'Professional showcase of skills and projects',
      },
    ],
    serviceQualifications:
      'We utilize the latest web technologies to build engaging and visually appealing portfolios. Our focus is on creating a portfolio that not only looks great but also functions smoothly across all devices.',
    serviceQualificationsList: [
      {
        item: 'Expertise in modern web technologies',
      },
      {
        item: 'High-quality, visually appealing designs',
      },
      {
        item: 'Seamless performance across devices',
      },
    ],
  },
]

export const CounterData = [
  {
    id: 1,
    number: '98',
    rightIcon: '%',
    text: 'Project Completed',
  },
  {
    id: 2,
    number: '4',
    rightIcon: '+',
    text: 'Years of Experience',
  },
  {
    id: 3,
    number: '30',
    rightIcon: '+',
    text: 'Projects Done',
  },
]

export const FAQData = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is a business agency?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'What services does a business agency provide?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How often should I update my website?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'How do subscriptions work?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 5,
    type: ['changelog', 'terms'],
    question: 'What other services are you compatible with?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'What other services are you compatible with?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
]

export const TestimonialData = [
  {
    id: 1,
    logoLight: '/images/testimonial/bodygroup.svg',
    logoDark: '/images/testimonial/bodygroup-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 4,
    author: {
      name: 'Robert Frost',
      designation: 'Lead Developer',
      image: '/images/testimonial/avatar1.png',
    },
  },
  {
    id: 2,
    logoLight: '/images/testimonial/caudile.svg',
    logoDark: '/images/testimonial/caudile-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 5,
    author: {
      name: 'Guy Hawkins',
      designation: 'Developer',
      image: '/images/testimonial/avatar2.png',
    },
  },
  {
    id: 3,
    logoLight: '/images/testimonial/axeptio.svg',
    logoDark: '/images/testimonial/axeptio-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 3,
    author: {
      name: 'Cody Fisher',
      designation: 'UI Designer',
      image: '/images/testimonial/avatar3.png',
    },
  },
  {
    id: 4,
    logoLight: '/images/testimonial/infinity.svg',
    logoDark: '/images/testimonial/infinity-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 2,
    author: {
      name: 'Albert Flores',
      designation: 'Sr. Developer',
      image: '/images/testimonial/avatar4.png',
    },
  },
  {
    id: 5,
    logoLight: '/images/testimonial/mfinity.svg',
    logoDark: '/images/testimonial/mfinity-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 1,
    author: {
      name: 'Floyed Miles',
      designation: 'Junior Designer',
      image: '/images/testimonial/avatar5.png',
    },
  },
  {
    id: 6,
    logoLight: '/images/testimonial/coolchat.svg',
    logoDark: '/images/testimonial/coolchat-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 5,
    author: {
      name: 'Bessie Cooper',
      designation: 'Manager',
      image: '/images/testimonial/avatar6.png',
    },
  },
]

export const PaymentRatingData = [
  {
    id: 1,
    rating: 4.7,
    name: 'Capterra',
    desc: 'Top Customer Fulfilment',
  },
  {
    id: 2,
    rating: 4.6,
    name: 'Capterra',
    desc: 'Best Payment Software',
  },
  {
    id: 3,
    rating: 4.9,
    name: 'Trustpilot',
    desc: 'Top Payment Company',
  },
]

export const CoreFeatures = [
  {
    id: 1,
    title: 'Useful Features',
    iconLight: '/images/payment/invoice.svg',
    iconDark: '/images/payment/invoice-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    title: 'Insights and Reports',
    iconLight: '/images/payment/insight.svg',
    iconDark: '/images/payment/insight-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    title: 'Managing Inventory',
    iconLight: '/images/payment/inventory.svg',
    iconDark: '/images/payment/inventory-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    title: 'Organized Expense',
    iconLight: '/images/payment/expens.svg',
    iconDark: '/images/payment/expens-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    title: 'Organize Receipts',
    iconLight: '/images/payment/receipts.svg',
    iconDark: '/images/payment/receipts-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    title: 'Mobile App',
    iconLight: '/images/payment/app.svg',
    iconDark: '/images/payment/app-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const PaymentFeaturesData = [
  {
    id: 1,
    iconLight: '/images/payment/paymentFeature.svg',
    iconDark: '/images/payment/paymentFeature-dark.svg',
    title: 'Useful Features',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/payment/payementSecure.svg',
    iconDark: '/images/payment/payementSecure-dark.svg',
    title: '100% Secure',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/payment/paymentCashback.svg',
    iconDark: '/images/payment/paymentCashback-dark.svg',
    title: 'Cashback Program',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const PricingData = [
  {
    id: 1,
    featured: false,
    title: 'Landing Page',
    desc: 'Create your landing page with ease and boost your conversion rate.',
    priceMonthly: '549.00',
    priceYearly: '599.00',
    save: '',
    priceList: [
      {
        name: '5 - 6 pages',
      },
      {
        name: 'Free hosting for 1 year',
      },
      {
        name: 'Free domain for 1 year',
      },
      {
        name: 'SEO optimised',
      },
      {
        name: '1 year free maintenance',
      },
    ],
  },

  {
    id: 2,
    featured: true,
    title: 'E-Commerce',
    desc: 'Start selling your products online with our e-commerce solution.',
    priceMonthly: '2999.00',
    priceYearly: '530.00',
    save: '',
    priceList: [
      {
        name: 'Unlimited products',
      },
      {
        name: '10+ Payment gateway integration',
      },
      {
        name: 'Free hosting for 1 year',
      },
      {
        name: 'Free domain for 1 year',
      },
      {
        name: 'SEO optimised',
      },
      {
        name: 'Whatsapp Integration',
      },
      {
        name: '1 year free maintenance',
      },
      {
        name: 'Admin Panel',
      },
    ],
  },
  {
    id: 3,
    featured: false,
    title: 'Smart Portfolio',
    desc: 'Showcase your skills and achievements with a cutting-edge personal portfolio.',
    priceMonthly: '599.00',
    priceYearly: '350.00',
    save: '',
    priceList: [
      {
        name: '5 - 6 pages',
      },
      {
        name: 'PDf, Video, and CV integration',
      },
      {
        name: 'Free domain for 1 year',
      },
      {
        name: 'Free hosting for 1 year',
      },
      {
        name: 'SEO optimised',
      },
      {
        name: 'Free NFC Card',
      },
      {
        name: '1 year free maintenance',
      },
    ],
  },
]

export const BankingServicesData = [
  {
    id: 1,
    iconLight: '/images/banking/agent.svg',
    iconDark: '/images/banking/agent-dark.svg',
    title: 'Agent Banking',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/banking/savings.svg',
    iconDark: '/images/banking/savings-dark.svg',
    title: 'Savings Account',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/banking/interest.svg',
    iconDark: '/images/banking/interest-dark.svg',
    title: 'Low Interest',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const teamData = [
  {
    id: 1,
    name: 'Cody Fisher',
    designation: 'Lead Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team1.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 2,
    name: 'Kristin Coper',
    designation: 'Project Manager',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team2.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 3,
    name: 'Guy Hawkins',
    designation: 'Lead Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team3.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 4,
    name: 'Wade Wareen',
    designation: 'Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team4.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 5,
    name: 'Bessie Cooper',
    designation: 'Product Manager',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team5.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 6,
    name: 'Jacob Jones',
    designation: 'Art Director',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team6.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
]

export const AboutFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Our Passion',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Transparency',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Our Mission',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const AboutImages = [
  {
    id: 1,
    image: '/images/about/about1.png',
  },
  {
    id: 2,
    image: '/images/about/about2.png',
  },
  {
    id: 3,
    image: '/images/about/about3.png',
  },
]

export const IntegrationData = [
  {
    id: 1,
    image: '/images/figma.svg',
    title: 'Figma',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    image: '/images/dropbox.svg',
    title: 'Dropbox',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    image: '/images/twitter.svg',
    title: 'Twitter/X',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    image: '/images/slack.svg',
    title: 'Slack',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    image: '/images/google-drive.svg',
    title: 'Google Drive',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    image: '/images/asana.svg',
    title: 'Asana',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const FooterData = {
  logo: '/images/logo.svg',
  logoDark: '/images/logo-light.svg',
  footerText: 'Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.',
  copyright: `${new Date().getFullYear()} Aplio. All Rights Reserved`,
  email: 'info@example.com',
  phone: '+3 230 705 5448',
  expolre: [
    {
      id: 1,
      name: 'About',
      link: '/about',
    },
    {
      id: 2,
      name: 'Services',
      link: '/services',
    },
    {
      id: 3,
      name: 'Career',
      link: '/career',
    },
    {
      id: 4,
      name: 'Payment',
      link: '/home-2',
    },
    {
      id: 5,
      name: 'Pricing',
      link: '/price',
    },
    {
      id: 6,
      name: "Faq's",
      link: '/faq',
    },
    {
      id: 7,
      name: 'Testimonials',
      link: '/testimonial',
    },
  ],
  resources: [
    {
      id: 1,
      name: 'Banking',
      link: '/home-3',
    },
    {
      id: 2,
      name: 'Team',
      link: '/teams',
    },
    {
      id: 3,
      name: 'Integration',
      link: '/integration',
    },
    {
      id: 4,
      name: 'Blog',
      link: '/blog',
    },
    {
      id: 5,
      name: 'Log In',
      link: '/login',
    },
    {
      id: 6,
      name: 'Sign Up',
      link: '/signup',
    },
    {
      id: 7,
      name: '404',
      link: '/not-found',
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: <Facebook />,
      link: '#',
    },
    {
      id: 2,
      name: <Github />,
      link: '#',
    },
    {
      id: 3,
      name: <LinkedIn />,
      link: '#',
    },
    {
      id: 4,
      name: <Behance />,
      link: '#',
    },
  ],
}
