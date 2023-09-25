import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <div class="fixed bottom-0 inset-x-0 container text-center">
      <div class="py-6">
        Made with <span class="text-red-500">❤</span> by{" "}
        <a
          href="https://qwik.builder.io"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light-primary dark:text-dark-primary"
        >
          ⚡️ Qwik
        </a>
      </div>
    </div>
  );
});
