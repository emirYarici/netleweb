import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'netle',
    short_name: 'netle',
    description: 'netle - Yanlışlarını nete dönüştür!',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3a6ff7',
    icons: [
      {
        src: '/logo-square.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
    ],
  }
}
