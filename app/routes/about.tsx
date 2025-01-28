import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CountryInfo" },
    { name: "Check out country data!", content: "Welcome to CountryInfo!" },
  ];
}

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          About This Website
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          This website uses the{" "}
          <span className="font-semibold text-emerald-600">
            REST Countries API{" "}
          </span>
          to display comprehensive information about countries from around the
          world.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Explore our data to learn about country names, capitals, regions,
          populations, flags, and much more. Whether you’re curious about a
          particular country or looking for insights about global regions, our
          interactive explorer makes it easy.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our goal is to build a fully responsive and modern web application
          using the latest technologies, including React Router v7 for seamless
          routing and Tailwind CSS for a beautiful, responsive user interface.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          This application was developed based on knowledge gained from a
          fantastic{" "}
          <a
            href="https://youtu.be/JMn_yIVl8eo?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-600 hover:underline"
          >
            video tutorial.
          </a>
        </p>
      </div>
    </div>
  );
}
