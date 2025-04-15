export default function HomeGridRightColumn() {
  return (
    <div className="grid grid-rows-2 h-full">
      <div className="bg-gray-200 mx-6 mb-3 flex items-center justify-center rounded-xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Right Column - Top</h2>
          <p>This is the top row of the right column.</p>
        </div>
      </div>

      <div className="bg-gray-300 mx-6 mt-3 flex items-center justify-center rounded-xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Right Column - Bottom</h2>
          <p>This is the bottom row of the right column.</p>
        </div>
      </div>
    </div>
  );
}
