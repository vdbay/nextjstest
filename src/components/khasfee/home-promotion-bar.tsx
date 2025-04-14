export default function HomePromotionBar() {
  return (
    <div className="bg-amber-100 h-12 flex items-center justify-center">
      <span className="font-medium mr-1">
        Don't miss our special promotion!
      </span>
      <a
        href="/signup"
        className="text-blue-600 font-semibold underline hover:text-blue-800"
      >
        SIGN UP
      </a>
      <span className="text-gray-800 font-medium ml-1">
        and get 20% off your first order!
      </span>
    </div>
  );
}
