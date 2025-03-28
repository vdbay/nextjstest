import { Image } from "@mui/icons-material";

export default function HomePage() {
  return (
    <div className="flex h-screen bg-white p-4 md:p-8 flex-col items-center justify-center gap-4">
      <div className="w-full text-black flex-row flex items-center justify-between">
        {/* left div */}
        <div className="flex flex-row bg-gray-100 w-min items-center justify-center rounded-3xl shadow-lg p-4 text-black gap-2">
          <Image /> Khasfee
        </div>
        {/* center div */}
        <div className="flex flex-row bg-gray-100 w-min items-center justify-center rounded-3xl shadow-lg p-4 text-black gap-2">
          <Image /> Khasfee
        </div>
        {/* right div */}
        <div className="flex flex-row bg-gray-100 w-min items-center justify-center rounded-3xl shadow-lg p-4 text-black gap-2">
          <Image /> Khasfee
        </div>
      </div>
      <div className="w-full h-full  bg-gray-100 flex flex-col items-center justify-center rounded-3xl shadow-lg p-10 text-black">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-gray-600 mb-6 text-center">
          This is a placeholder for your home page content.
        </p>
      </div>
    </div>
  );
}
