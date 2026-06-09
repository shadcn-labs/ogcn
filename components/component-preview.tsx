import type { ReactNode } from "react";

import { ComponentPreviewClient } from "@/components/component-preview-client";
import { ComponentSource } from "@/components/component-source";
import { cn } from "@/lib/utils";

export const ComponentPreview = ({
  name,
  src,
  title,
  hideCode = false,
  children,
  className,
}: {
  name?: string;
  src?: string;
  title?: string;
  hideCode?: boolean;
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("flex min-w-0 flex-col gap-4", className)}>
    <ComponentPreviewClient>{children}</ComponentPreviewClient>
    {!hideCode && (name || src) ? (
      <ComponentSource name={name} src={src} title={title} />
    ) : null}
  </div>
);
