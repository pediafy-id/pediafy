
const navBarLinks = [
  { name: "Halaman Utama", url: "/idn" },
  { name: "Produk Digital", url: "/idn/products" },
  { name: "Layanan", url: "/idn/services" },
  { name: "Artikel", url: "/idn/blog" },
  { name: "Kontak", url: "/idn/contact" },
];

const footerLinks = [
  {
    section: "Ekosistem",
    links: [
      { name: "Documentation", url: "/idn/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/idn/products" },
      { name: "Services de Construction", url: "/idn/services" },
    ],
  },
  {
    section: "Sumber Daya",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/idn/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};