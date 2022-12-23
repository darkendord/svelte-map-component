const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
	  ],
	  theme: {
		extend: {},
	  },

	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer,
	]
};

module.exports = config;
