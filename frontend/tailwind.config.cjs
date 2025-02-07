module.exports = {
    content: ['./src/**/*.{js,jsx,html,ejs}'],
    theme: {
        extend: {
            colors: {
                primary: '#1c6d44',
                background: '#f4f7fd',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};