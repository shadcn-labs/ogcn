import type { ReactNode } from "react";

import { ComponentPreviewClient } from "@/components/component-preview-client";
import { ComponentSource } from "@/components/component-source";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

/**
 * Docs wrapper for an OG component: a faithful scaled DOM preview, an optional
 * live-image endpoint, and the component's source code.
 *
 * This is a server component so it can render the (server-only)
 * `ComponentSource`; the scaling logic lives in the client
 * `ComponentPreviewClient`.
 */
export const ComponentPreview = ({
  name,
  src,
  title,
  endpoint,
  hideCode = false,
  children,
  className,
}: {
  /** Registry name used to render the source code block. */
  name?: string;
  /** Optional explicit source path (passed through to `ComponentSource`). */
  src?: string;
  /** Optional title for the source code block. */
  title?: string;
  /**
   * Optional `app/og` endpoint for this component (e.g. "/og/component/simple").
   * When provided, a copy button for the live image URL is shown.
   */
  endpoint?: string;
  /** Hide the inline source code block (e.g. when shown in an Installation tab). */
  hideCode?: boolean;
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col gap-4", className)}>
    <ComponentPreviewClient>{children}</ComponentPreviewClient>
    {endpoint ? (
      <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-2">
        <code className="truncate font-mono text-xs text-muted-foreground">
          {endpoint}
        </code>
        <CopyButton event="copy_npm_command" value={endpoint} />
      </div>
    ) : null}
    {!hideCode && (name || src) ? (
      <ComponentSource name={name} src={src} title={title} />
    ) : null}
  </div>
);
