const devPresets = ["@vue/babel-preset-app"];
const buildPresets = [
  [
    "@babel/preset-env",
    // Config for @babel/preset-env
    {
      include: [/(optional-chaining|nullish-coalescing)/],
    },
  ],
];
export default {
  presets: process.env.NODE_ENV === "development" ? devPresets : buildPresets,
};
