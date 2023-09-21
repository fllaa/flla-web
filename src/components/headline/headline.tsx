import { component$ } from "@builder.io/qwik";

export const Headline = component$(() => {
  return (
    <div class="space-y-4 text-center md:text-start md:max-w-[60%] ">
      <div>
        <h5 class="md:text-xl text-black dark:text-white">
          Hi 👋, My name is Fallah Andy Prakasa.
        </h5>
        <h5 class="md:text-xl text-black dark:text-white">
          I'm a Software Engineer who loves to build things with code.
        </h5>
      </div>
      <h1 class="text-3xl md:text-7xl font-black text-black dark:text-white leading-[1]">
        "Crafting{" "}
        <span class="text-light-primary dark:text-dark-primary">
          Elegant Code
        </span>{" "}
        with Precision and Passion"
      </h1>
    </div>
  );
});
