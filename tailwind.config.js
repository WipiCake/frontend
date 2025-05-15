const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        // Base font size for rem calculations
        root: '10px',
        // Pretendard Variable 한글

        'k-12-Regular': [
          '1.2rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-12-Medium': [
          '1.2rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-13-Regular': [
          '1.3rem',
          { fontWeight: 400, lineHeight: '150%', letterSpacing: 0 },
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
        'k-15-Medium': [
          '1.5rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
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
        'k-18-Semibold': [
          '1.8rem',
          { fontWeight: 600, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-20-Medium': [
          '2rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-20-Bold': [
          '2rem',
          { fontWeight: 700, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-24_Medium': [
          '2.4rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-28_Medium': [
          '2.8rem',
          { fontWeight: 500, lineHeight: '150%', letterSpacing: 0 },
        ],
        'k-30-Light': [
          '3rem',
          { fontWeight: 300, lineHeight: '150%', letterSpacing: 0 },
        ],
      },
      colors: {
        bg: {
          10: '#FFFFFF',
          20: '#F8F6F6',
          30: '#F2EEEE',
        },
        red: '#ED1C24',
        black: {
          10: '#FFFFFF',
          20: '#DBDBDB',
          30: '#999999',
          40: '#505050',
          50: '#1A1A1A',
        },
        pink: {
          10: '#FFF5F5',
          20: '#FFDFDF',
          30: '#FF9999',
          40: '#E88B8B',
          50: '#B56D6D',
        },
      },
    },
  },
  plugins: [],
};

export default config;
