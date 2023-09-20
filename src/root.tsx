import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { DarkThemeLauncher } from "~/components/dark-theme-launcher/dark-theme-launcher";
import { FontPreconnect } from "~/components/font-preconnect/font-preconnect";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <FontPreconnect />
        <DarkThemeLauncher />
      </head>
      <body
        class="bg-light-bg text-black dark:bg-dark-bg dark:text-white transition-colors duration-200 ease-in-out"
        lang="en"
      >
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
