import ListingSection from "@/components/sections/listing-section";
import { api, ENDPOINT } from "@/lib/api";

export default function Home() {
  const list = [
    {
      label: "Top Rated",
      href: "top-rated",
      fetcher: async () => {
        return (await api.get(ENDPOINT.discoverTopRated)).data.data?.results;
      },
    },
    {
      label: "Popular",
      href: "popular",
      fetcher: async () => {
        return (await api.get(ENDPOINT.discoverTrending)).data.data?.results;
      },
    },
    {
      label: "Upcoming",
      href: "upcoming",
      fetcher: async () => {
        return (await api.get(ENDPOINT.discoverUpcoming)).data.data?.results;
      },
    },
  ];

  const getBannerData = async () => {
    return (await api.get(ENDPOINT.discoverNowPlaying)).data?.data?.results;
  };

  return (
    <main>
      <ListingSection bannerFetcher={getBannerData} list={list} />
    </main>
  );
}
