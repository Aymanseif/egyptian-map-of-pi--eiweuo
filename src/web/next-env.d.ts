/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/compat/navigation" />

// NOTE: This file is auto-generated by Next.js
// Version: next@13.0.0
// Do not modify this file manually

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Environment
      NEXT_PUBLIC_APP_ENV: 'development' | 'staging' | 'production'
      
      // API Configuration
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_SOCKET_URL: string
      NEXT_PUBLIC_CDN_URL: string
      
      // Map Configuration
      NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: string
      NEXT_PUBLIC_MAP_STYLE_URL: string
      
      // Pi Network Configuration
      NEXT_PUBLIC_PI_API_KEY: string
      
      // App Configuration
      NEXT_PUBLIC_DEFAULT_LANGUAGE: 'ar' | 'en'
      NEXT_PUBLIC_DEFAULT_THEME: 'light' | 'dark'
    }
  }

  // Augment JSX namespace for Next.js specific elements
  namespace JSX {
    interface IntrinsicElements {
      // Allow Next.js specific elements in JSX
    }
  }
}

// Ensure this is treated as a module
export {}