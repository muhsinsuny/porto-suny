export interface Testimonial {
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  rating: number;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Thom Haye',
    role: 'Project Manager',
    company: 'Upwork',
    companyLogo: '/icons/icon-upwork.svg',
    rating: 5,
    message:
      'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
  },
  {
    name: 'Emily Carter',
    role: 'Head of Product',
    company: 'Trello',
    companyLogo: '/icons/icon-trello.svg',
    rating: 5,
    message:
      'An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations.',
  },
  {
    name: 'Sarah Lee',
    role: 'Engineering Manager',
    company: 'Zapier',
    companyLogo: '/icons/icon-zapier.svg',
    rating: 5,
    message:
      'An exceptional frontend developer with a deep understanding of UI/UX principles. A valuable asset to any team!',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Developer',
    company: 'Zoom',
    companyLogo: '/icons/icon-zoom.svg',
    rating: 5,
    message:
      'A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers.',
  },
  {
    name: 'Emily Carter',
    role: 'Head of Product',
    company: 'Trello',
    companyLogo: '/icons/icon-netflix.svg',
    rating: 5,
    message:
      'An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations.',
  },
  {
    name: 'Thom Haye',
    role: 'Project Manager',
    company: 'Upwork',
    companyLogo: '/icons/icon-linkedin.svg',
    rating: 5,
    message:
      'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
  },
  {
    name: 'Sarah Lee',
    role: 'Engineering Manager',
    company: 'Zapier',
    companyLogo: '/icons/icon-instagram.svg',
    rating: 5,
    message:
      'An exceptional frontend developer with a deep understanding of UI/UX principles. A valuable asset to any team!',
  },
  {
    name: 'Thom Haye',
    role: 'Project Manager',
    company: 'Upwork',
    companyLogo: '/icons/icon-databricks.svg',
    rating: 5,
    message:
      'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Developer',
    company: 'Zoom',
    companyLogo: '/icons/icon-dropbox.svg',
    rating: 5,
    message:
      'A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers.',
  },
  {
    name: 'James Wilson',
    role: 'Engineering Manager',
    company: 'Slack',
    companyLogo: '/icons/icon-facebook.svg',
    rating: 4,
    message:
      'A reliable team member with a strong work ethic and a knack for debugging tricky issues quickly.',
  },
  {
    name: 'Samantha Lee',
    role: 'Product Manager',
    company: 'Google',
    companyLogo: '/icons/icon-adobe.svg',
    rating: 4,
    message:
      'Consistently delivers high-quality features on time. Excellent communication and a strong sense of ownership.',
  },
  {
    name: 'David Kim',
    role: 'UX Designer',
    company: 'Airbnb',
    companyLogo: '/icons/icon-airbnb.svg',
    rating: 5,
    message:
      'An outstanding developer who bridges the gap between design and functionality. Always receptive to feedback.',
  },
];

export default testimonials;
