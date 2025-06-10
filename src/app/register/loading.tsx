import UniversalLoading from "@/components/shared/universalloading";
export default function LoadingRegister() {
  return (
    <>
      <UniversalLoading
        variant="spinner"
        size="lg"
        text="Loading..."
        className="min-h-svh flex"
      />
    </>
  );
}
