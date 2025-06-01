"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

type Props = React.ComponentProps<typeof Link>;

export default function LinkKeeps(props: Props) {
  const searchParams = useSearchParams();

  const hrefWithQuery = useMemo(() => {
    if (!props.href || typeof props.href !== "string") return props.href;

    const currentQuery = searchParams.toString();
    const [baseHref, originalQuery] = props.href.split("?");

    const queryPrefix = currentQuery ? "?" : "";
    return originalQuery
      ? `${baseHref}?${originalQuery}&${currentQuery}`
      : `${baseHref}${queryPrefix}${currentQuery}`;
  }, [props.href, searchParams]);

  return <Link {...props} href={hrefWithQuery} />;
}
