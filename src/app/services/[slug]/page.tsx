import { services } from '@/json/services';
import ServiceDetail from '@/components/service/servicedetail/ServiceDetail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.path.split('/').pop() || '',
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.path === `/services/${resolvedParams.slug}`);

  if (!service) {
    return {
      title: 'Service Not Found | Ditvi Technologies',
      description: 'The requested service could not be found',
    };
  }

  return {
    title: `${service.title} | Ditvi Technologies`,
    description: service.description,
    keywords: service.keywords || '',
    openGraph: {
      title: `${service.title} | Ditvi Technologies`,
      description: service.description,
      url: `https://ditvi.com/services/${resolvedParams.slug}`,
      siteName: 'Ditvi Technologies',
      type: 'website',
    }
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const service = services.find((s) => s.path === `/services/${resolvedParams.slug}`);

  if (!service) {
    notFound();
  }

  return (
    <main className="service-page">
      <ServiceDetail 
        params={resolvedParams}
        service={service}
      />
    </main>
  );
}