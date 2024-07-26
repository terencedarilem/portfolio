// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Assurez-vous que Tailwind CSS scanne tous les fichiers sources
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
