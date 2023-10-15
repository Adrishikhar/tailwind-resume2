/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins"],
				sourceSans: ["Source Sans 3"],
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
}
