import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Outfly Marketing - Reuniones Cualificadas sin Anuncios',
    short_name: 'Outfly',
    description: 'Sistema de prospección en frío automatizado que genera reuniones cualificadas para tu negocio',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00D4FF',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
