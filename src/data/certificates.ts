export type Certificate = {
  src: string;
  alt: string;
  caption?: string;
};

// Update this list by adding your certificate image filenames in the public folder.
// Example: upload to public/lovable-uploads and add the path here.
export const certificates: Certificate[] = [
  {
    src: "/lovable-uploads/og-image.png",
    alt: "Sample certificate preview 1",
    caption: "Sample certificate",
  },
  {
    src: "/lovable-uploads/84fe97e0-dab1-4226-9a04-d7991ca52a1f.jpg",
    alt: "Sample certificate preview 2",
    caption: "Sample image",
  },
];
