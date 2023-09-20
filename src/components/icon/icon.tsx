import React from "react";
import { component$ } from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import { icons } from "lucide-react";

interface IconProps {
  color?: string;
  size?: number;
}

export const MoonIcon = component$<IconProps>(({ color, size }) => {
  const LucideIcon = qwikify$<Omit<IconProps, "name">>(icons.Moon as React.FC);

  return <LucideIcon color={color} size={size} />;
});

export const SunIcon = component$<IconProps>(({ color, size }) => {
  const LucideIcon = qwikify$<Omit<IconProps, "name">>(icons.Sun as React.FC);

  return <LucideIcon color={color} size={size} />;
});
