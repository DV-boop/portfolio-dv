import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "E-Commerce App",
      gitLink: "https://github.com/DV-boop/e-commerce-app.git",
      liveLink: "", // Add live link if available
      about: (
        <>
          <p>A full-stack e-commerce application focusing on cloud-native deployment and DevOps automation.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed front-end with React and backend APIs with Node.js and Express.</li>
            <li>Implemented continuous integration and deployment (CI/CD) pipelines using Jenkins and GitHub Actions.</li>
            <li>Containerized the app using Docker and deployed on AWS Elastic Kubernetes Service (EKS).</li>
            <li>Managed infrastructure with Terraform scripts for scalable AWS resources provisioning.</li>
            <li>Set up monitoring and logging using AWS CloudWatch and Prometheus.</li>
          </ul>
        </>
      ),
      stack: ["react", "nodejs", "mongodb", "express", "css", "docker", "jenkins", "terraform", "aws"],
      img: "/e-commerce.png",
    },
    {
      title: "Dev Gemini Clone",
      gitLink: "https://github.com/DV-boop/dev-gemini-clone.git",
      liveLink: "", // Add live link if available
      about: (
        <>
          <p>A React-based clone of the Dev Gemini website with focus on scalable cloud deployment and infrastructure automation.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Designed responsive UI with React and CSS for seamless user experience.</li>
            <li>Automated build and deployment workflows using GitHub Actions integrated with AWS Amplify.</li>
            <li>Implemented environment management and secret handling using AWS Parameter Store.</li>
            <li>Leveraged AWS CloudFront CDN for fast content delivery and optimized site performance.</li>
            <li>Maintained code quality and performed automated testing as part of CI pipelines.</li>
          </ul>
        </>
      ),
      stack: ["react", "css", "javascript", "aws", "github-actions", "amplify", "cloudfront"],
      img: "/gemini-clone.png",
    },
    {
      title: "Two-Tier Flask App",
      gitLink: "https://github.com/DV-boop/two-tier-flask-app.git",
      liveLink: "", // Add live link if available
      about: (
        <>
          <p>A two-tier application using Flask backend deployed with robust DevOps practices on AWS.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed RESTful APIs using Flask with SQLAlchemy ORM.</li>
            <li>Containerized application with Docker and deployed on AWS Fargate for serverless container hosting.</li>
            <li>Automated deployments using Terraform for provisioning ECS clusters and related AWS resources.</li>
            <li>Implemented CI/CD pipelines using Jenkins, including automated testing and code analysis.</li>
            <li>Configured AWS CloudWatch for real-time monitoring and alerting of application health.</li>
          </ul>
        </>
      ),
      stack: ["flask", "python", "docker", "aws", "terraform", "jenkins"],
      img: "/flask.jpg",
    },
    {
      title: "Online Shop Hackathon",
      gitLink: "https://github.com/DV-boop/online_shop_hackathon.git",
      liveLink: "", // Add live link if available
      about: (
        <>
          <p>Rapid prototype of an online shop built during a hackathon with DevOps and cloud deployment focus.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed UI using JavaScript, Bootstrap, and CSS for fast, responsive interface.</li>
            <li>Deployed application on AWS Elastic Beanstalk to enable quick scaling and deployment.</li>
            <li>Created automated build and deploy pipelines using GitHub Actions.</li>
            <li>Used Terraform for infrastructure provisioning of AWS resources including S3 for static assets.</li>
            <li>Monitored app performance with AWS CloudWatch and set up alerts for failures.</li>
          </ul>
        </>
      ),
      stack: ["javascript", "html", "css", "bootstrap", "aws", "terraform", "github-actions"],
      img: "/onlineshop.png",
    },
    {
      title: "Terraform & Ansible Automation",
      gitLink: "https://github.com/DV-boop/terraform-ansible.git",
      liveLink: "", // Add live link if available
      about: (
        <>
          <p>Infrastructure as Code (IaC) and configuration management automation to simplify cloud provisioning.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Wrote Terraform modules to provision and manage AWS infrastructure resources like EC2, VPC, and RDS.</li>
            <li>Developed Ansible playbooks for automated server configuration, software installation, and patching.</li>
            <li>Integrated Terraform and Ansible workflows for fully automated environment setup.</li>
            <li>Created reusable scripts for multi-environment deployment (dev, staging, production).</li>
            <li>Improved infrastructure reliability and consistency through version-controlled automation.</li>
          </ul>
        </>
      ),
      stack: ["terraform", "ansible", "bash", "aws"],
      img: "/ansible-terraform.png",
    },
    {
      title: "Portfolio DV",
      gitLink: "https://github.com/DV-boop/portfolio-dv.git",
      liveLink: "", // Add live link if available
      about: (
        <>
          <p>Personal portfolio website demonstrating skills, projects, and professional experience with a cloud-ready architecture.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Built with Next.js and React for fast server-side rendering and SEO optimization.</li>
            <li>Deployed on Vercel with automated CI/CD pipelines for instant updates.</li>
            <li>Integrated Google Analytics and performance monitoring tools.</li>
            <li>Implemented responsive design and dark mode toggle for improved UX.</li>
            <li>Used GitHub Actions to automate testing and deployment workflows.</li>
          </ul>
        </>
      ),
      stack: ["nextjs", "react", "css", "vercel", "github-actions"],
      img: "/portfolio.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
