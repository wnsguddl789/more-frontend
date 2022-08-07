import {GithubPost, PostEntity} from 'src/types';

export const dummyData: GithubPost[] = [
  {
    id: '12341',
    title: 'more-frontend',
    post_like: 23,
    description: '모두의 레포지토리입니다.',
    used_language: 'TypeScript::ReactJs::Strapi::Recoil',
    thumbnail: `${process.env.PUBLIC_URL}/images/openGraphImage.png`,
    created_at: '2022.07.13',
    stars: 12,
    author: 'SprintTeamSecond',
    url: 'https://github.com/SprintTeamSecond/more-frontend',
    readme_url: 'SprintTeamSecond/more-frontend/develop',
    full_name: 'dd',
  },
  {
    id: 'id2',
    title: 'typescript-eslint/typescript-eslint',
    post_like: 23,
    description:
      '✨ Monorepo for all the tooling which enables ESLint to support TypeScript',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://opengraph.githubassets.com/5ce4f35c4f48cd4f8ee2507a056507235a2612a2f3132915952d4ade875634a0/typescript-eslint/typescript-eslint',
    created_at: '',
    stars: 12,
    author: 'typescript-eslint',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
  {
    id: 'id3',
    title: 'next-auth-example',
    post_like: 23,
    description: 'About Example showing how to use NextAuth.js with Next.js',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://repository-images.githubusercontent.com/262579731/325861c3-21b2-46e5-90d8-97d0ff23d789',
    created_at: '',
    stars: 12,
    author: 'nextauthjs',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
  {
    id: 'id4',
    title: 'React-Query',
    post_like: 23,
    description:
      '🤖 Powerful asynchronous state management, server-state utilities and data fetching for TS/JS, React, Solid, Svelte and Vue.',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://repository-images.githubusercontent.com/207645083/e5281400-c0a4-11ea-911e-bf5e8aee9f15',
    created_at: '',
    stars: 12,
    author: 'TanStack',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
  {
    id: 'id5',
    title: 'nest',
    post_like: 23,
    description:
      'About A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications on top of TypeScript & JavaScript (ES6, ES7, ES8) 🚀',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://opengraph.githubassets.com/b4ec71543143c7f99dad1b82c0a2fd24c0356fe3a5c306754cc2ce2af483c73d/nestjs/nest',
    created_at: '',
    stars: 12,
    author: 'nestjs',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
  {
    id: 'id6',
    title: 'svelte',
    post_like: 23,
    description: 'Cybernetically enhanced web apps',
    used_language: 'JavaScript::NodeJs::NextJs',
    thumbnail:
      'https://repository-images.githubusercontent.com/74293321/6cef4300-6605-11e9-92a3-9171a14b1e2d',
    created_at: '',
    stars: 12,
    author: 'sveltejs',
    url: 'asd',
    readme_url: 'dd',
    full_name: 'dd',
  },
];
