/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"]
            }
        },
    },
    plugins: [require("daisyui"), require('@tailwindcss/typography')],
    // daisyUI config
    daisyui: {
        themes: ["dark"],
        darkTheme: false
    },
}
