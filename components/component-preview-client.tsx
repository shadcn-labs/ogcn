"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

export const ComponentPreviewClient = ({
  children,
}: {
  children: ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) {
      return;
    }

    const update = () => setScale(el.clientWidth / OG_WIDTH);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stageStyle: CSSProperties = {
    height: OG_HEIGHT,
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    width: OG_WIDTH,
  };

  return (
    <div
      className="relative w-full min-w-0 overflow-hidden rounded-xl border bg-background shadow-sm"
      ref={containerRef}
      style={{ aspectRatio: `${OG_WIDTH} / ${OG_HEIGHT}` }}
    >
      <div
        className="absolute top-0 left-0"
        style={scale ? stageStyle : { ...stageStyle, visibility: "hidden" }}
      >
        {children}
      </div>
    </div>
  );
};
