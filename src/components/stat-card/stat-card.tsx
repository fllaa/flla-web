import { component$ } from "@builder.io/qwik";
import clsx from "clsx";

interface StatCardProps {
  label: string;
  value: string | number;
  subLabel?: string;
  extraClasses?: string;
}

export const StatCard = component$(
  ({ label, value, subLabel, extraClasses }: StatCardProps) => {
    return (
      <div
        class={clsx(
          extraClasses,
          "relative p-6 rounded-xl text-center bg-light-tertiary dark:bg-dark-tertiary shadow shadow-light-tertiary dark:shadow-dark-tertiary text-light-primary dark:text-dark-primary",
        )}
      >
        <h6 class="text-lg uppercase">{label}</h6>
        {subLabel && (
          <span class="absolute top-0 right-0 text-sm font-light p-2">
            {subLabel}
          </span>
        )}
        <h2 class="text-4xl md:text-5xl xl:text-6xl font-bold">{value}</h2>
      </div>
    );
  },
);
