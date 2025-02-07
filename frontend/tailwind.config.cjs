module.exports = {
    content: ['./src/**/*.{js,jsx,html,ejs}'],
    theme: {
        extend: {
            colors: {
                primary: '#3f732e',
                background: '#f4f7fd',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};