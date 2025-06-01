"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InfoSectionProps {
  id: number;
  title: string;
  highlight: string;
  description: string;
  faqs: FAQItem[];
  imageUrl: any;
}

export default function InfoSection({
  id,
  title,
  highlight,
  description,
  faqs,
  imageUrl,
}: InfoSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`relative flex flex-col ${
        id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      } items-start md:items-center justify-between gap-12 py-10 px-6 md:px-20 text-white`}
    >
      {/* Left Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={imageUrl}
          alt="Section visual"
          width={500}
          height={280}
          className="object-cover rounded-xl bg-white"
        />
      </div>

      {/* Middle ID Circle */}
      <div className="relative hidden md:flex w-[80px] justify-center items-center z-10">
        <div className="w-13 h-13 bg-yellow-500 text-white rounded-full flex items-center justify-center text-[30px] shadow-md">
          {id}
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full space-y-4">
        <h2 className="text-2xl font-bold">
          {title.split(" ")[0]} <span className="text-yellow-500">{highlight}</span>
        </h2>
        <p className="text-sm text-gray-300">{description}</p>

        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left py-2 border-b border-gray-700 font-semibold"
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <p className="text-sm text-gray-400 mt-1">{faq.answer}</p>
            )}
          </div>
        ))}

        <button className="mt-4 px-4 py-2 bg-yellow-500 rounded-2xl shadow-sm hover:opacity-90 transition text-white">
          Explore
        </button>
      </div>
    </div>
  );
}
