module.exports = {
  devtools: true,
  dest: "build",
  // base,
  title: "Assistive Technologies - Basics",
  extraWatchFiles: ["./vuepress/config/*.js"],
  themeConfig: {
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar")
  }
};
