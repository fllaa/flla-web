import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Headline } from "~/components/headline/headline";
import { HeroCode } from "~/components/hero-code/hero-code";

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center">
      <Headline />
      <HeroCode />
    </div>
  );
});

export const head: DocumentHead = {
  title: "flla. | Home",
  meta: [
    {
      name: "description",
      content: "Homepage",
    },
  ],
};
