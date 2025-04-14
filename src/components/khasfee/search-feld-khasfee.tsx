import { SearchIcon } from "lucide-react";

export default function SearchFeldKhasfee() {
  return (
    <div className="flex items-center flex-grow mx-4 border bg-amber-100 rounded-full px-4 py-2">
      <SearchIcon className="mx-2" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full focus:outline-none"
      />
    </div>
  );
}
