module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"],
            },

            colors: {
                "dark-primary": "rgb(22, 27, 34)",
                "dark-secondery": "rgb(13, 17, 23)",
            },
            width: {
                xs: "300px",
            },
            height: {
                xs: "300px",
            },

            maxWidth: {
                "8xl": "1440px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
