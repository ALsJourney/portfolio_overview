import Link from "next/link";
import Socials from "../partials/utils/Socials";
export default function IntroductionComponent() {
  return (
    <>
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">ALsJourney</h1>
        <h2 className="mb-8 text-2xl md:text-3xl">
          Web3.0 Developer & Cyber Security Student
        </h2>

        <div>
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">Contact</h3>
        </div>

        <Socials />

        <div className="mt-12">
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">Achievements</h3>
          <ul className="list-inside list-disc text-lg">
            <li>Computer Science Bachelor&apos;s Degree in July 2023</li>
            <li>
              <Link
                href="https://thedogecapital.com/"
                target="_blank"
                className="hover:opacity-50"
              >
                Doge Academy
              </Link>
            </li>
            <li>Masters Degree in IT & Mobile Software Security</li>
          </ul>
        </div>
    </>
  );
}
