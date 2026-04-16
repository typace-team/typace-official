/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'var(--tw-prose-body)',
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--tw-prose-headings)',
            },
            a: {
              color: 'var(--tw-prose-links)',
              '&:hover': {
                color: 'var(--tw-prose-links-hover)',
              },
            },
            pre: {
              backgroundColor: 'var(--tw-prose-pre-bg)',
              color: 'var(--tw-prose-pre-code)',
              border: '1px solid var(--tw-prose-pre-border)',
            },
            code: {
              backgroundColor: 'var(--tw-prose-code-bg)',
              color: 'var(--tw-prose-code)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
              '&::before, &::after': {
                display: 'none',
              },
            },
            blockquote: {
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              backgroundColor: 'var(--tw-prose-quote-bg)',
              padding: '1rem 1.5rem',
              borderRadius: '0.5rem',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // 新增这一行
  ],
}
