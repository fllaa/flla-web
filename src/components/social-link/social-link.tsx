import { component$ } from "@builder.io/qwik";
import { LuGithub, LuLinkedin, LuTwitter } from "@qwikest/icons/lucide";

import { SOCIAL_LINKS } from "~/constants/social";

const icons = {
  github: LuGithub,
  linkedin: LuLinkedin,
  twitter: LuTwitter,
};

export const SocialLink = component$(() => {
  return (
    <div class="flex justify-center md:justify-start space-x-4 py-4">
      {SOCIAL_LINKS.map((social) => {
        const Icon = icons[social.name as keyof typeof icons];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            class={`group inline-flex w-9 ${social.hoverWidthClass} h-9 p-2 justify-start items-center text-black bg-transparent hover:bg-light-tertiary font-medium rounded-lg text-md dark:text-white dark:hover:bg-dark-tertiary transition-all duration-200 ease-in-out`}
          >
            <Icon />
            <span class="hidden group-hover:block pl-2">
              @{social.username}
            </span>
          </a>
        );
      })}
    </div>
  );
});
