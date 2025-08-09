export type Certificate = {
  src: string;
  alt: string;
  caption?: string;
};

// Update this list by adding your certificate image filenames in the public folder.
// Example: upload to public/lovable-uploads and add the path here.
export const certificates: Certificate[] = [
  {
    src: "/lovable-uploads/japan-jenesys.jpg",
    alt: "Japan Jenesys Certificate",
    caption: "Japan Jenesys Program Certificate",
  },

  {
    src: "/lovable-uploads/praxix.jpg",
    alt: "PRAXIS Summer Camp",
    caption: "PRAXIS Summer Camp",
  },
  
  {
    src: "/lovable-uploads/green-force-1.jpg",
    alt: "Green Force 1 Certificate",
    caption: "Green Force 1 Achievement Certificate",
  },
  {
    src: "/lovable-uploads/green-force-r.jpg",
    alt: "Green Force R Certificate",
    caption: "Green Force R Achievement Certificate",
  },
  {
    src: "/lovable-uploads/champion.jpg",
    alt: "Champion Certificate",
    caption: "Champion Recognition Certificate",
  },

  {
    src: "/lovable-uploads/bsk.jpg",
    alt: "BSK Certificate",
    caption: "BSK Achievement Certificate",
  },
  // Optional: Include og-image.png if it's relevant; otherwise, it's excluded.
  // Note: The sample 84fe97e0-dab1-4226-9a04-d7991ca52a1f.jpg is excluded.
  // For your CV (Shawon_kumar_mondal_cv.pdf), consider adding a separate download link.
];
