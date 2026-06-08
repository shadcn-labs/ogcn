import { CommandBox } from "@/components/command-box";
import { ComponentPreview } from "@/components/component-preview";
import { HomeCtas } from "@/components/home-ctas";
import { PageTransition } from "@/components/page-transition";
import { ROUTES } from "@/constants/routes";
import { Blog } from "@/registry/ogcn/blog";
import { Gradient } from "@/registry/ogcn/gradient";
import { Grid } from "@/registry/ogcn/grid";
import { Simple } from "@/registry/ogcn/simple";
import { BreadcrumbJsonLd } from "@/seo/json-ld";

export const dynamic = "force-static";
export const revalidate = false;

export default function IndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: ROUTES.HOME }]} />
      <PageTransition>
        <section className="container-wrapper relative">
          <div className="container flex flex-col items-center gap-4 py-16 text-center md:py-20 lg:py-24">
            <h1 className="max-w-7xl bg-linear-to-b from-foreground via-foreground to-foreground/65 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Beautiful OG images, made simple
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Ready to use, customizable Open Graph image components for React.
              Built on Satori. Distributed via shadcn.
            </p>

            <CommandBox className="mt-4 w-full max-w-xl" />

            <HomeCtas className="mt-4" />
          </div>
        </section>

        <section className="container-wrapper pb-12 lg:pb-20">
          <div className="container grid gap-6 sm:grid-cols-2">
            <ComponentPreview>
              <Gradient {...Gradient.previewProps} />
            </ComponentPreview>
            <ComponentPreview>
              <Simple {...Simple.previewProps} />
            </ComponentPreview>
            <ComponentPreview>
              <Blog {...Blog.previewProps} />
            </ComponentPreview>
            <ComponentPreview>
              <Grid {...Grid.previewProps} />
            </ComponentPreview>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
