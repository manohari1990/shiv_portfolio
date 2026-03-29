import healthcareImg from "@/assets/portfolio-healthcare.jpg";

export interface ProjectsPayload {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  num: string;
  link?: string;
}

export const projects: ProjectsPayload[] = [
  {
    title: "Work Showcase",
    subtitle: "American Oncology Institute · Citizens Specialty · AMPATH",
    description: "Led end-to-end branding and marketing creatives including health awareness programs, diagnostic promotions, and hospital events across print, digital, and environmental media. \n A curated showcase of my creative work in healthcare, branding, and marketing communication. This portfolio highlights a range of visually compelling designs including campaign creatives, social media posts, print advertisements, and outdoor branding solutions. \n The work reflects a strong focus on concept-driven design, clean visual hierarchy, and impactful storytelling. Each piece is crafted to communicate effectively with the target audience while maintaining brand consistency and aesthetic clarity. \n From healthcare awareness campaigns and maternal care promotions to product advertisements and outdoor media, this collection demonstrates versatility across digital and print mediums. \n Tools & Skills: Visual Design, Brand Identity, Campaign Design, Typography, Layout Composition, Figma, Canva, Adobe Creative Suite. \n This portfolio represents my approach to blending creativity with purpose—designing visuals that not only look good but also deliver meaningful communication.",
    image: healthcareImg,
    tags: ["Brand Identity", "Print", "Environmental"],
    num: "01",
    link: "https://drive.google.com/file/d/1tQRJqVv68aqHc4X2X-N5LTiniBTrgImY/view"
  }
];