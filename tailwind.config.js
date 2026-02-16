/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark backgrounds
        background: {
          darker: '#0a0e1a',      // Very dark blue-gray
          dark: '#0f1419',        // Dark blue-gray
          DEFAULT: '#1a1f2e',     // Default dark blue-gray
          light: '#252b3b',       // Lighter dark blue-gray
          lighter: '#2d3548',     // Even lighter
        },

        // Neon Indigo (primary)
        neon: {
          indigo: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',       // Base neon indigo
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
            glow: '#6366f1',      // For glow effects
          },
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',       // Base neon blue
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            glow: '#3b82f6',      // For glow effects
          },
          green: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',       // Base neon green
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            glow: '#10b981',      // For glow effects
          },
        },

        // Status colors (for machine states)
        status: {
          running: '#10b981',     // Neon green
          stopped: '#6b7280',     // Gray
          emergency: '#ef4444',   // Red
          warning: '#f59e0b',     // Amber
          idle: '#3b82f6',        // Blue
        },

        // UI element colors
        surface: {
          DEFAULT: '#1e2433',     // Card/surface background
          hover: '#252b3b',       // Hover state
          active: '#2d3548',      // Active state
        },

        // Text colors
        text: {
          primary: '#f9fafb',     // Almost white
          secondary: '#d1d5db',   // Light gray
          tertiary: '#9ca3af',    // Medium gray
          muted: '#6b7280',       // Muted gray
        },

        // Border colors
        border: {
          DEFAULT: '#374151',     // Default border
          light: '#4b5563',       // Lighter border
          dark: '#1f2937',        // Darker border
        },
      },

      // Glow effects for neon elements
      boxShadow: {
        'neon-indigo': '0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
        'neon-indigo-lg': '0 0 15px rgba(99, 102, 241, 0.6), 0 0 30px rgba(99, 102, 241, 0.4), 0 0 45px rgba(99, 102, 241, 0.2)',
        'neon-blue': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
        'neon-blue-lg': '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4), 0 0 45px rgba(59, 130, 246, 0.2)',
        'neon-green': '0 0 10px rgba(16, 185, 129, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)',
        'neon-green-lg': '0 0 15px rgba(16, 185, 129, 0.6), 0 0 30px rgba(16, 185, 129, 0.4), 0 0 45px rgba(16, 185, 129, 0.2)',
      },

      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },

      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.5), 0 0 10px rgba(99, 102, 241, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.8), 0 0 30px rgba(99, 102, 241, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
