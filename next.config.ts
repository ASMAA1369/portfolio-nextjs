/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'picsum.photos',       // Pour photos générées
      'img.freepik.com',     // Pour Freepik
      'cdn.pixabay.com',     // Pour Pixabay
      'images.unsplash.com', // Pour Unsplash (si tu veux en ajouter)
    ],
  },
};

export default nextConfig;
