import UniversalLoading from "@/components/shared/universalloading";
export default function LoadingLogin() {
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
