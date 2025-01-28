import type { Route } from "./+types/country";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CountryInfo" },
    { name: "Check out country data!", content: "Welcome to CountryInfo!" },
  ];
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await res.json();
  return data;
}

export default function Country({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);

  const countryName = loaderData[0]?.name?.common || "N/A";
  const countryFlag = loaderData[0]?.flag || "";

  const country = {
    "Official name": loaderData[0]?.name?.official || "N/A",
    Region: loaderData[0]?.region || "N/A",
    Subregion: loaderData[0]?.subregion || "N/A",
    Capital: loaderData[0]?.capital || "N/A",
    Borders: loaderData[0]?.borders?.join(", ") || "N/A",
    Population: loaderData[0]?.population.toLocaleString() || "N/A",
    "Car side": loaderData[0]?.car?.side || "N/A",
    Languages:
      Object.values(loaderData[0]?.languages || {}).join(", ") || "N/A",
    Timezones: loaderData[0]?.timezones?.join(", ") || "N/A",
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-900">
          {countryName} {countryFlag}
        </h2>
        <div className="space-y-2 text-gray-700">
          {Object.entries(country).map(([key, value]) => (
            <p key={key}>
              <span className="font-semibold">{key}:</span> {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
