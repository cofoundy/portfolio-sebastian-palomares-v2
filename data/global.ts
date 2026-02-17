type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    paypal: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Campañas",
    path: "/projects",
  },
  {
    title: "Diseños",
    path: "/designs",
  },
];

export const footer: Footer = {
  columns: [
    {
      title: "Páginas",
      links: [
        {
          name: "Inicio",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Campañas",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Diseños",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/sebastianpalomares/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:sebastianplt37@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "",
    paypal: "",
    message: "",
  },
};
