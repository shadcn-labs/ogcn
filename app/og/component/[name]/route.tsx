import { ImageResponse } from "next/og";

import { Blog } from "@/registry/ogcn/blog";
import { Changelog } from "@/registry/ogcn/changelog";
import { Gradient } from "@/registry/ogcn/gradient";
import { Grid } from "@/registry/ogcn/grid";
import { Photo } from "@/registry/ogcn/photo";
import { Quote } from "@/registry/ogcn/quote";
import { Simple } from "@/registry/ogcn/simple";

const SIZE = { height: 630, width: 1200 };

const renderComponent = (
  name: string,
  get: (key: string) => string | undefined,
  list: (key: string) => string[] | undefined
) => {
  switch (name) {
    case "simple": {
      return (
        <Simple
          accent={get("accent")}
          brand={get("brand")}
          description={get("description")}
          label={get("label")}
          title={get("title")}
        />
      );
    }
    case "grid": {
      return (
        <Grid
          accent={get("accent")}
          brand={get("brand")}
          description={get("description")}
          title={get("title")}
        />
      );
    }
    case "gradient": {
      return (
        <Gradient
          description={get("description")}
          gradient={get("gradient")}
          label={get("label")}
          title={get("title")}
        />
      );
    }
    case "blog": {
      return (
        <Blog
          accent={get("accent")}
          author={get("author")}
          avatar={get("avatar")}
          category={get("category")}
          excerpt={get("excerpt")}
          meta={get("meta")}
          title={get("title")}
        />
      );
    }
    case "changelog": {
      return (
        <Changelog
          accent={get("accent")}
          brand={get("brand")}
          date={get("date")}
          items={list("items")}
          title={get("title")}
          version={get("version")}
        />
      );
    }
    case "quote": {
      return (
        <Quote
          accent={get("accent")}
          author={get("author")}
          avatar={get("avatar")}
          handle={get("handle")}
          quote={get("quote")}
        />
      );
    }
    case "photo": {
      return (
        <Photo
          brand={get("brand")}
          image={get("image")}
          label={get("label")}
          title={get("title")}
        />
      );
    }
    default: {
      return null;
    }
  }
};

/**
 * Renders any OG component as a real PNG via Satori (`next/og`).
 *
 * GET /og/component/simple?title=Hello&description=World
 *
 * This is what proves the registry components work on the server — the exact
 * same components power the live DOM previews in the docs.
 */
export const GET = async (
  request: Request,
  { params }: RouteContext<"/og/component/[name]">
) => {
  const { name } = await params;
  const sp = new URL(request.url).searchParams;
  const get = (key: string) => sp.get(key) ?? undefined;
  const list = (key: string) =>
    sp.get(key)?.split("|").filter(Boolean) ?? undefined;

  const element = renderComponent(name, get, list);

  if (!element) {
    return new Response(`Unknown component: ${name}`, { status: 404 });
  }

  return new ImageResponse(element, SIZE);
};
