'use client';
import digitalmarketing from './assets/digitalmarketing.jpg';
import traditional from './assets/traditionalmarketing.jpg';
import website from './assets/webdesigning.jpg';
import app from './assets/appdevelopment.jpg';
import fullstack from './assets/fullstack.jpg';
import socialmedia from './assets/socialmedia.jpg';
import custom from './assets/customesolution.jpg';
import bootstrap from './assets/Bootstrapping.jpg';

import InfoSection, { InfoSectionProps } from './components/Infosection';

const data: InfoSectionProps[] = [
  {
    id: 1,
    title: 'Digital Marketing',
    highlight: 'Marketing',
    description: 'Promoting your brand online to reach more people and grow your business.',
    imageUrl: digitalmarketing,
    faqs: [
      {
        question: 'Why does digital marketing matter',
        answer: 'It connects your brand with the right audience, builds awareness, and drives growth through targeted online strategies.'
      },
      {
        question: 'What services do you provide',
        answer: 'SEO, Google & Facebook Ads, Content Strategy, Social Media Management, and more.'
      },
      {
        question: 'How do ads help my business',
        answer: 'Ads increase brand visibility, drive targeted traffic, and result in better conversions.'
      }
    ]
  },
  {
    id: 2,
    title: "Traditional",
    highlight: "Marketing",
    description: "Promoting your brand through offline methods like print, events, and podcasts to reach wider audiences.",
    imageUrl: traditional,
    faqs: [
      {
        question: "Why does traditional marketing matter?",
        answer: "It builds brand trust, engages local audiences, and supports digital efforts through offline visibility."
      },
      {
        question: "What services do you offer?",
        answer: "We offer banner ads, print media, event marketing, podcast production, and offline brand activations."
      },
      {
        question: "How do offline campaigns help?",
        answer: "They create tangible brand experiences, reinforce local presence, and complement online visibility."
      }
    ]
  },
{
    id: 3,
    title: "Website",
    highlight: "Development",
    description: "Building fast, responsive, and user-friendly websites that help your brand grow online.",
    imageUrl: website,
    faqs: [
      {
        question: "Why is a website important?",
        answer: "It’s your digital storefront—helping build trust, share your message, and drive sales or leads."
      },
      {
        question: "What services do you offer?",
        answer: "We build custom websites, landing pages, CMS platforms, and redesign existing sites."
      },
      {
        question: "Do you handle e-commerce too?",
        answer: "Yes, we develop scalable and secure e-commerce websites tailored to your needs."
      }
    ]
  },
  {
    id: 4,
    title: "App",
    highlight: "Development",
    description: "Creating mobile apps to help your brand engage users anywhere, anytime.",
    imageUrl: app,
    faqs: [
      {
        question: "Why are apps important?",
        answer: "They offer personalized, mobile-first experiences that boost user engagement and loyalty."
      },
      {
        question: "What services do you offer?",
        answer: "We design and develop native and cross-platform apps with complete backend support."
      },
      {
        question: "Do you build for both iOS and Android?",
        answer: "Yes, we develop apps for both iOS and Android using native and hybrid technologies."
      }
    ]
  },
  {
    id: 5,
    title: "Full-Stack",
    highlight: "Software Solutions",
    description: "Custom software built from the ground up to fit your business processes and scale with your growth.",
    imageUrl: fullstack,
    faqs: [
      {
        question: "Why choose custom software?",
        answer: "It’s scalable, efficient, and tailored to your exact needs—unlike generic tools."
      },
      {
        question: "What services do you offer?",
        answer: "We provide full-stack development for SaaS platforms, enterprise tools, and business automation systems."
      },
      {
        question: "Can you build SaaS platforms?",
        answer: "Absolutely, we specialize in building robust SaaS platforms from concept to launch."
      }
    ]
  },
  {
    id: 6,
    title: "Social Media",
    highlight: "Management",
    description: "Managing your brand’s presence on social platforms to grow engagement, trust, and loyalty.",
    imageUrl: socialmedia,
    faqs: [
      {
        question: "Why is social media important?",
        answer: "It’s where your audience lives. A strong social presence builds trust and keeps your brand top-of-mind."
      },
      {
        question: "What services do you offer?",
        answer: "We handle content creation, posting, scheduling, reporting, and platform strategy."
      },
      {
        question: "Do you handle posting and replies?",
        answer: "Yes, we manage posting, monitor engagement, and respond to comments and messages."
      }
    ]
  },
  {
    id: 7,
    title: "Custom",
    highlight: "Solutions",
    description: "Tailored strategies and builds designed specifically for your unique business needs.",
    imageUrl: custom,
    faqs: [
      {
        question: "Why choose a custom solution?",
        answer: "Your business is unique—custom solutions align perfectly with your goals, not generic templates."
      },
      {
        question: "What services do you offer?",
        answer: "We provide tailored development, strategy consulting, integrations, and full-stack builds."
      },
      {
        question: "Is my idea safe with you?",
        answer: "Yes, we maintain complete confidentiality and can sign NDAs upon request."
      }
    ]
  },
  {
    id: 8,
    title: "Brand",
    highlight: "Bootstrapping",
    description: "Helping you launch your brand from the ground up — with everything built for success.",
    imageUrl: bootstrap,
    faqs: [
      {
        question: "Why is brand bootstrapping important?",
        answer: "It takes the stress out of starting a brand—so you focus on the idea while we handle the setup and launch."
      },
      {
        question: "What do you offer for new brands?",
        answer: "We help with naming, brand identity, website, social setup, and launch strategy."
      },
      {
        question: "Do you help after launch too?",
        answer: "Yes, we offer post-launch support including marketing, optimization, and scaling assistance."
      }
    ]
  }
];

export default function HomePage() {
  return (
    <div className="relative bg-black text-white px-6 md:px-20 py-16">
      <div className="absolute left-[50%] transform -translate-x-1/2 top-0 bottom-0 min-h-screen w-[1px] bg-white z-0" />

      <div className="flex flex-col space-y-8">
        {data.map((section) => (
          <InfoSection key={section.id} {...section} />
        ))}
      </div>
    </div>
  );
}