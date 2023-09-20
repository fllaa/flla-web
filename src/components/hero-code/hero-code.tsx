import { component$, useStore } from "@builder.io/qwik";
import { QwikLottie } from "@flla/qwik-lottie";

import windowCodeAnim from "~/assets/anims/window-code.json";
import windowCodeDarkAnim from "~/assets/anims/window-code-dark.json";
import { useTheme } from "~/contexts/theme";

export const HeroCode = component$(() => {
  const theme = useTheme();

  const store = useStore({
    lottie: {
      options: {
        animationData: windowCodeAnim as any,
        loop: true,
        autoplay: true,
      },
    },
    lottieDark: {
      options: {
        animationData: windowCodeDarkAnim as any,
        loop: true,
        autoplay: true,
      },
    },
  });
  return theme.value === "light" ? (
    <QwikLottie options={store.lottie.options} />
  ) : (
    <QwikLottie options={store.lottieDark.options} />
  );
});
