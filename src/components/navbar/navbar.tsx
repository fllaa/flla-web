import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import clsx from "clsx";
import {
  LuContact,
  LuFolderOpen,
  LuHome,
  LuLineChart,
} from "@qwikest/icons/lucide";

import { NAV_LIST } from "~/constants/nav";

const icons = {
  Home: LuHome,
  Stats: LuLineChart,
  Projects: LuFolderOpen,
  Contact: LuContact,
};

export const Navbar = component$(() => {
  const loc = useLocation();
  return (
    <div class="fixed bottom-0 md:top-0 md:bottom-auto md:mt-6 inset-x-0 z-10 container flex justify-around items-center text-center w-full md:w-fit gap-4 p-4 rounded-t-2xl md:rounded-b-2xl bg-light-tertiary dark:bg-dark-tertiary">
      {NAV_LIST.map((nav) => {
        const Icon = icons[nav.title as keyof typeof icons];
        const isActive = loc.url.pathname === nav.url;
        return (
          <Link
            key={nav.title}
            href={nav.url}
            class={clsx(
              isActive
                ? "text-light-bg bg-light-primary dark:text-dark-bg dark:bg-dark-primary"
                : "text-light-primary bg-transparent dark:text-dark-primary",
              "hover:text-light-bg hover:bg-light-secondary dark:hover:text-dark-bg dark:hover:bg-dark-secondary",
              "flex gap-2 p-3 items-center font-medium rounded-xl text-xl transition-colors duration-200 ease-in-out",
            )}
          >
            <Icon />
            <span class="text-sm">{nav.title}</span>
          </Link>
        );
      })}
    </div>
  );
});
