// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    extend: { padding: { "fluid-video": "56.25%" } },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
