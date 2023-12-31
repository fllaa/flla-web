import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { LuMoon, LuSun } from "@qwikest/icons/lucide";

import { useTheme } from "~/contexts/theme";

export const Header = component$(() => {
  const theme = useTheme();

  useVisibleTask$(() => {
    theme.value = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });
  return (
    <header class="fixed top-0 inset-x-0 container flex justify-between items-center py-4 md:py-8 bg-light-bg dark:bg-dark-bg transition-all duration-200 ease-in-out z-10">
      <a href="/">
        <h1 class="text-3xl md:text-5xl font-bold text-light-primary hover:tracking-wider transition-all duration-200 ease-in-out dark:text-dark-primary">
          flla.
        </h1>
      </a>
      <button
        type="button"
        class="text-black bg-transparent hover:bg-light-tertiary font-medium rounded-lg text-xl dark:text-white p-2 dark:hover:bg-dark-tertiary transition-colors duration-200 ease-in-out"
        onClick$={() => {
          if (theme.value === "dark") {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
            theme.value = "light";
          } else {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
            theme.value = "dark";
          }
        }}
      >
        {theme.value === "light" ? <LuMoon /> : <LuSun />}
      </button>
    </header>
  );
});
