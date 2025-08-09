export type Certificate = {
  src: string;
  alt: string;
  caption?: string;
};

export const certificates: Certificate[] = [
  {
    src: "/lovable-uploads/bsk.jpg",
    alt: "BSK Certificate",
    caption: "Details or date here (e.g., Issued [Date])",
  },
  {
    src: "/lovable-uploads/butthan-cert.png",  // Assuming converted from butthan.pdf
    alt: "Butthan Certificate",
    caption: "Issued [Date]",
  },
  {
    src: "/lovable-uploads/champion-cert.png",  // Converted from champion.pdf
    alt: "Champion Certificate",
    caption: "Issued [Date]",
  },
  {
    src: "/lovable-uploads/green-force-1-cert.png",  // Converted from green force 1.pdf
    alt: "Green Force 1 Certificate",
    caption: "Issued [Date]",
  },
  {
    src: "/lovable-uploads/green-force-r-cert.png",  // Converted from green force-r.pdf
    alt: "Green Force R Certificate",
    caption: "Issued [Date]",
  },
  {
    src: "/lovable-uploads/japan-jenesys-cert.png",  // Converted from japan jenesys.pdf
    alt: "Japan Jenesys Certificate",
    caption: "Issued [Date]",
  },
  {
    src: "/lovable-uploads/og-image.png",
    alt: "OG Image Certificate",
    caption: "Issued [Date]",
  },
  // Remove samples or add more if needed
];
