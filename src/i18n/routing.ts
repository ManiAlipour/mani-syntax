import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fa"],

  // Used when no locale matches
  defaultLocale: "en",

  localeCookie: {
    name: "USER_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
});
