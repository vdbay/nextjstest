// src/components/MarkdownRender.tsx
"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {
  content: string;
  className?: string;
};

export default function MarkdownRender({ content, className }: Props) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    import("@/lib/markdown").then(async ({ markdownToHtml }) => {
      const parsed = await markdownToHtml(content);
      setHtml(parsed);
    });
  }, [content]);

  return (
    <div className={cn("flex items-center justify-center p-16", className)}>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
