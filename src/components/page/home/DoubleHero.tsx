import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

export default function DoubleHero() {
  return (
    <div className="flex flex-col md:flex-row mb-18">
      <LeftHero />
      <RightHero />
    </div>
  );
}
