import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        Building Scalable & Reliable DevOps Solutions
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I began my DevOps journey in January 2025, and since then, I have fully equipped myself with the skills necessary to be job-ready. 
            I specialize in designing and maintaining automated, secure, and scalable cloud infrastructures that drive efficient software delivery.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            My expertise includes Docker, Linux, Jenkins, Terraform, Kubernetes, Ansible, AWS, Prometheus, Grafana, and proficient Bash shell scripting. 
            I focus on implementing Infrastructure as Code, CI/CD pipelines, and robust monitoring to ensure seamless production environments.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            I am passionate about continuous learning and applying best practices to solve infrastructure challenges. 
            Curious to know more? Here is&nbsp;
            <br className="hidden md:block" />
            <Link
              className="underline"
              href={"https://drive.google.com/file/d/1pJQYsSXSSy0597uvNFtzitKU6ZSKV6mk/view?usp=sharing"}
              target="_blank"
              rel="noopener noreferrer"
            >
              my resume
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Cloud & Infrastructure
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Docker, Linux, Terraform, Kubernetes, Ansible, AWS, Bash & Shell Scripting
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              CI/CD & Automation
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Jenkins, GitHub Actions, GitLab CI, Python, Bash Scripting, Infrastructure as Code
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Monitoring & Security
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Prometheus, Grafana, ELK Stack, HashiCorp Vault, Security Best Practices
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
