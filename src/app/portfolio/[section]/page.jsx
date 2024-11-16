"use client";
import { useParams } from "next/navigation";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const SectionPage = () => {
  const params = useParams();
  const section = params.section;

  // Conditionally render the correct component based on the section
  let content;
  switch (section) {
    case "home":
      content = <Home />;
      break;
    case "projects":
      content = <Projects />;
      break;
    case "contact":
      content = <Contact />;
      break;
    default:
      content = <p>Section not found</p>;
  }

  return (
    <div>
      <h1>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
      {content}
    </div>
  );
};

export default SectionPage;
