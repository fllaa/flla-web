import {
  type Signal,
  createContextId,
  useContext,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";

export const ThemeContext = createContextId<Signal<string>>("theme-context");

export const useThemeContextProvider = () => {
  const theme = useSignal(
    (typeof window !== "undefined" && localStorage.theme) || undefined,
  );
  return useContextProvider(ThemeContext, theme);
};

export const useTheme = () => useContext(ThemeContext);
