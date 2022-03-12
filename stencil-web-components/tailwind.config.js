module.exports = {
  important: true,
  content: ["./src/index.html"],
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"]
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')"
      })
    }
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"]
    }
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true
  }
}
