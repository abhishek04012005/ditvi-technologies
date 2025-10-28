import ServiceDetail from '@/components/service/servicedetail/ServiceDetail';
import { services } from '@/json/services';
import { cities, getServiceCityMetadata } from '@/json/seo';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageParams {
  slug: string;
  city: string;
}

interface PageProps {
  params: Promise<PageParams>
}

export async function generateStaticParams() {
  const paths = [];
  
  for (const service of services) {
    for (const city of cities) {
      paths.push({
        slug: service.path.split('/').pop() || '',
        city: city.slug
      });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.path === `/services/${resolvedParams.slug}`);
  const cityData = cities.find(c => c.slug === resolvedParams.city);

  if (!service || !cityData) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found'
    };
  }

  const metadata = getServiceCityMetadata(resolvedParams.slug, resolvedParams.city);
  return metadata || {
    title: `${service.title} in ${cityData.name} | Ditvi Technologies`,
    description: `${service.description} in ${cityData.name}, ${cityData.state}`
  };
}

export default async function ServiceCityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = services.find(s => s.path === `/services/${resolvedParams.slug}`);
  const cityData = cities.find(c => c.slug === resolvedParams.city);

  if (!service || !cityData) {
    notFound();
  }

  return (
    <main className="service-page">
      <ServiceDetail 
        params={resolvedParams}
        service={service}
        cityData={cityData}
      />
    </main>
  );
}