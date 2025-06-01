import { Suspense } from "react";
import LinkKeeps from "./linkkeeps";
import Link from "next/link";

type Props = React.ComponentProps<typeof Link>;

export default function LinkKeep(props: Props) {
  return (
    <Suspense fallback={null}>
      <LinkKeeps {...props} />
    </Suspense>
  );
}
