import HomeGridLeftColumn from "./home-grid-leftcolumn";
import HomeGridRightColumn from "./home-grid-rightcolumn";

export default function HomeGrid() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3"
      style={{ height: "calc(100vh - 12rem)" }}
    >
      <HomeGridLeftColumn />
      <HomeGridRightColumn />
    </div>
  );
}
