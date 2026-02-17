import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Entel - Activación 'Entel Conviene'",
    desc: "Producción y coordinación de stand promocional con equipo BTL. Activación en punto de venta con descuentos y engagement directo con clientes.",
    img: "/static/projects/entel-stand.jpg",
    link: "https://www.linkedin.com/in/sebastianpalomares/",
    tags: ["Producción BTL", "Activaciones", "Trade Marketing"],
  },
  {
    id: 1,
    title: "Entel - Campaña 'Powercito'",
    desc: "Activación de marca con mascota 'Powercito' de Entel. Producción de campaña BTL con personaje de marca para engagement emocional y recordación.",
    img: "/static/projects/entel-powercito.jpg",
    link: "https://www.linkedin.com/in/sebastianpalomares/",
    tags: ["Producción BTL", "Activaciones", "Brand Experience"],
  },
  {
    id: 2,
    title: "Entel - BTL Punto de Venta",
    desc: "Campaña BTL en tiendas Entel a nivel nacional. Coordinación de producción, instalación de materiales POP y activación con embajadores de marca.",
    img: "/static/projects/entel-tienda.jpg",
    link: "https://www.linkedin.com/in/sebastianpalomares/",
    tags: ["Trade Marketing", "POP", "Retail"],
  },
  {
    id: 3,
    title: "Softys - Evento Corporativo",
    desc: "Producción de evento corporativo para Softys con branding integral. Coordinación de escenografía, iluminación y experiencia de marca.",
    img: "/static/projects/softys-evento.jpg",
    link: "https://www.linkedin.com/in/sebastianpalomares/",
    tags: ["Eventos Corporativos", "Producción", "Branding"],
  },
  {
    id: 4,
    title: "Conexión 5.0 - Producción Audiovisual",
    desc: "Producción de contenido audiovisual para pantallas digitales. Coordinación de diseño, animación y despliegue en circuitos de cine y malls.",
    img: "/static/projects/pantallas-digitales.jpg",
    link: "https://www.linkedin.com/in/sebastianpalomares/",
    tags: ["Producción Audiovisual", "Digital Signage", "Content"],
  },
  {
    id: 5,
    title: "Eventos Corporativos Premium",
    desc: "Producción de eventos corporativos de alto nivel. Coordinación integral: catering, ambientación, logística y atención a clientes VIP.",
    img: "/static/projects/evento-corporativo.jpg",
    link: "https://www.linkedin.com/in/sebastianpalomares/",
    tags: ["Eventos", "Producción", "Catering"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
