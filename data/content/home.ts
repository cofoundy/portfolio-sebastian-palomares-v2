type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};

export const skills: Skill[] = [
  {
    title: "Meta Ads",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
  },
  {
    title: "Google Ads",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    title: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    title: "HTML/CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Canva",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    title: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "SEO",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sebastian lideró campañas BTL que superaron nuestras expectativas de engagement. Su capacidad para coordinar equipos y proveedores es excepcional.",
    name: "Moving Pack",
    job: "Agencia de Marketing",
  },
  {
    quote:
      "Su gestión de comunidades para nuestras marcas Bosch y MAPFRE fue impecable. Reportería clara, métricas optimizadas y contenido de calidad.",
    name: "Havas Group",
    job: "Agencia de Publicidad",
  },
  {
    quote:
      "Desde la estrategia digital hasta las activaciones presenciales, Sebastian aporta una visión 360° que pocas personas tienen en el mercado.",
    name: "Ebombo",
    job: "Startup de Eventos",
  },
];
