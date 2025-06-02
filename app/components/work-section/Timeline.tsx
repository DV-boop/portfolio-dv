"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/thinkerparadise.png", // Replace with your Thinker's Paradise logo if you have one
    jobTitle: "Web Developer Intern and IT Support",
    company: "THINKER'S PARADISE",
    jobType: "Internship",
    duration: "July 2024 – Nov 2024",
    stuffIDid: [
      "Provided IT support and troubleshooting for system and basic networking issues.",
      "Assisted in web development tasks and collaborated with the team using Git and GitHub.",
      "Actively participated in workflow planning, ensuring timely delivery of tasks and meeting project deadlines.",
    ],
  },
  {
    companyImg: "/logo.png", // Trainwithshubham logo in public folder
    jobTitle: "DevOps Trainee",
    company: "TRAINWITHSHUBHAM",
    jobType: "Trainee",
    duration: "Jan 2025 – April 2025",
    stuffIDid: [
      "Built and deployed 3+ CI/CD pipelines using GitHub Actions, improving deployment speed by 40% in project simulations.",
      "Containerized applications with Docker and implemented basic orchestration using Kubernetes, enabling smooth microservices rollout.",
      "Developed and triggered Jenkins pipelines for automated build, test, and deployment tasks, reducing manual effort by 60%.",
      "Configured and managed AWS EC2, EBS volumes, and monitoring with CloudWatch, simulating real-world DevOps cloud operations.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
