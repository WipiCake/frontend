const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['CustomFont', 'sans-serif'],
      },
      fontSize: {
        // Base font size for rem calculations
        root: '10px',
        // Pretendard Variable 한글

        'k-13-Regular': [
          '1.3rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: '0.1rem' },
        ],
        'k-13-Medium': [
          '1.3rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-14-Regular': [
          '1.4rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-14-Medium': [
          '1.4rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-15-Regular': [
          '1.5rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-16-Regular': [
          '1.6rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-16-Medium': [
          '1.6rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-17-Semibold': [
          '1.7rem',
          { fontWeight: 600, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-18-Medium': [
          '1.8rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-20-Medium': [
          '2rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-20-Bold': [
          '2rem',
          { fontWeight: 700, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-24_Regular': [
          '2.4rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-28_Medium': [
          '2.8rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-30-Light': [
          '3rem',
          { fontWeight: 300, lineHeight: '150%', letterSpacing: 0 },
        ],

        // Roboto 영문/숫자

        'en-13-Regular': [
          '1.3rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-13-Medium': [
          '1.3rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-14-Regular': [
          '1.4rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-14-Medium': [
          '1.4rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-15-Regular': [
          '1.5rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-16-Regular': [
          '1.6rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-16-Medium': [
          '1.6rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-17-Semibold': [
          '1.7rem',
          { fontWeight: 600, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-18-Medium': [
          '1.8rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-24-Regular': [
          '2.4rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-28-Medium': [
          '2.8rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'en-30-Light': [
          '3rem',
          { fontWeight: 300, lineHeight: '150%', letterSpacing: 0 },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
