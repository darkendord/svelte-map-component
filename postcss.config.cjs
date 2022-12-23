const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const flowbite = require('flowbite/plugin');

const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	  ],
	  theme: {
		extend: {},
	  },

	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer,
		flowbite(),
	]
};

module.exports = config;
