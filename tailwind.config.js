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
                opensans: ["Open Sans", "sans-serif"],
                roboto: ["Roboto", "sans-serif"]
            }
        },
    },
    plugins: [require("daisyui")],
    // daisyUI config
    daisyui: {
        themes: ["emerald", "dark"],
        darkTheme: false
    },
}
