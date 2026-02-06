import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllStates,
  getStateBySlug,
  getCitiesByState,
  getCityBySlug,
} from "../../../lib/directoryData";
import DirectoryCityContent from "../../../components/DirectoryCityContent";

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];
  for (const state of getAllStates()) {
    for (const city of getCitiesByState(state.slug)) {
      params.push({ state: state.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}): Promise<Metadata> {
  const { state, city } = await params;
  const stateData = getStateBySlug(state);
  const cityData = getCityBySlug(state, city);
  if (!stateData || !cityData) return {};
  return {
    title: `Car Services in ${cityData.name}, ${stateData.abbreviation} - Find Local Providers | Healvanna Auto`,
    description: `Find the best car detailing, body shops, collision repair, and more in ${cityData.name}, ${stateData.abbreviation}. Compare providers with real reviews and ratings.`,
    alternates: {
      canonical: `/directory/${stateData.slug}/${cityData.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;
  const stateData = getStateBySlug(state);
  const cityData = getCityBySlug(state, city);
  if (!stateData || !cityData) notFound();

  return <DirectoryCityContent state={stateData} city={cityData} />;
}
