import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url = 'https://www.chiragkalsariya.com' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{frontMatter.title || 'Chirag'}</title>
        <meta
          name="description"
          content={frontMatter.description || 'Chirag K. - Full Stack Developer with expertise in optimizing digital solutions. Explore my portfolio, projects, and experience.'}></meta>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Chirag portfolio'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Chirag K. - Full Stack Developer with expertise in optimizing digital solutions. Explore my portfolio, projects, and experience.'}
        />
        <meta
          property="og:image"
          content={`${url}${frontMatter.image || '/chirag-kalsariya-profile-photo.png'}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontMatter.title || 'Chirag Portfolio'} />
        <meta
          name="twitter:description"
          content={frontMatter.description || 'Chirag K. - Full Stack Developer with expertise in optimizing digital solutions. Explore my portfolio, projects, and experience.'}
        />
        <meta
          name="twitter:image"
          content={`${url}${frontMatter.image || '/chirag-kalsariya-profile-photo.png'}`}
        />
        <meta property="og:site_name" content="Chirag Kalsariya Portfolio" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
      </>
    );
  },
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Chirag K.
      </span>
    </>
  ),
  project: {
    link: 'https://www.linkedin.com/in/chirag-kalsariya',
    icon: (
      <svg width="28" height="28" viewBox="0 0 50 50" fill="currentColor">
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
      </svg>
    )
  },
  chat: {
    link: 'https://github.com/Chirag-kalsariya',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18"><title>GitHub</title><path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path></svg>
    )
  },
  footer: {
    content: <span>Portfolio website by Chirag K. Using Nextra Docs Template</span>,
  },
  feedback: {
    content: null
  },
  search: {
    placeholder: 'Search...',
  },
  nextThemes: {

  },
  docsRepositoryBase: "https://github.com/Chirag-kalsariya/Chirag_K_Portfolio/tree/main"
}

export default config
