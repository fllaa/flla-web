import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { LuArrowUpRight } from "@qwikest/icons/lucide";
import { StatCard } from "~/components/stat-card/stat-card";

import type { Stats, WakatimeResponse } from "~/types/wakatime";

export const useWakatimeStats = routeLoader$(async (requestEvent) => {
  const apiUrl = requestEvent.env.get("API_URL");
  const url = `${apiUrl}/wakatime/stats`;
  const res = await fetch(url);
  const data = (await res.json()) as WakatimeResponse<Stats>;
  return data.data;
});

export default component$(() => {
  const wakaStats = useWakatimeStats();
  return (
    <div class="min-h-screen pb-32 md:pb-0 pt-32">
      <div class="w-full p-8 border border-light-tertiary dark:border-dark-tertiary rounded-lg">
        <h2 class="text-4xl text-light-primary dark:text-dark-primary pb-12">
          Code Stats{" "}
          <span class="text-xs">
            by{" "}
            <a
              href="https://wakatime.com"
              target="_blank"
              class="text-light-secondary dark:text-dark-secondary group"
            >
              wakatime
              <LuArrowUpRight class="inline-block w-2 h-2 mb-[6px] group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
            </a>
          </span>
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-8 gap-8">
          <StatCard
            label="All Time"
            value={
              wakaStats.value.human_readable_total_including_other_language
            }
            subLabel={wakaStats.value.human_readable_range}
            extraClasses="col-span-2 md:col-span-4"
          />
          <StatCard
            label="Most Used Language"
            value={wakaStats.value.languages[0].name}
            extraClasses="col-span-2"
          />
          <StatCard
            label="Most Used IDE"
            value={wakaStats.value.editors[0].name}
            extraClasses="col-span-2"
          />
          <StatCard
            label="Daily Average"
            value={
              wakaStats.value
                .human_readable_daily_average_including_other_language
            }
            extraClasses="col-span-2"
          />
          <StatCard
            label="Days 🥱"
            value={wakaStats.value.days_including_holidays}
            extraClasses="col-span-2 md:col-span-1"
          />
          <StatCard
            label="Most Used OS"
            value={wakaStats.value.operating_systems[0].name}
            extraClasses="col-span-2"
          />
          <StatCard
            label="Seconds ⏱️"
            value={wakaStats.value.total_seconds_including_other_language.toFixed(
              2,
            )}
            extraClasses="col-span-2"
          />
          <StatCard
            label="Status"
            value={wakaStats.value.status}
            extraClasses="col-span-2 md:col-span-1"
          />
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "flla. | Stats",
  meta: [
    {
      name: "description",
      content: "Stats page of flla.",
    },
  ],
};
