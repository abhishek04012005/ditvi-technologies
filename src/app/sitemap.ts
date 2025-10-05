import { MetadataRoute } from 'next'
import { services } from '@/json/services'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://abhishek04012005.github.io/ditvi-technologies' 

    // Core pages
    const routes = [
        '',
        '/about',
        '/services',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 1,
    }))

    // Dynamic service pages
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}${service.path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // External redirects (for reference/SEO)
    const externalRoutes = [
        {
            url: 'https://biodata.ditvi.org',
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: 'https://resume.ditvi.org',
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
    ]

    return [...routes, ...serviceRoutes, ...externalRoutes]
}