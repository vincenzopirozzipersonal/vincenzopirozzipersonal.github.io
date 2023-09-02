import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'portfolio',
  distFolder: './dist/portfolio', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
  },
};