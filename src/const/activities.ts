export const activities = [
  {
    title:
      'PR TIMES開発者ブログ：【月間4200万PV】プレスリリース掲載ページの Next.js 移行でやったこと',
    href: 'https://developers.prtimes.jp/2023/12/13/replace-press-release-page-with-nextjs/',
    date: '2023.12.13',
  },
  {
    title:
      'blog.yoiw.dev：Vitest の restoreMocks はとりあえず true でいいと思います',
    href: 'https://blog.yoiw.dev/posts/vitest-restore-mocks',
    date: '2023.11.06',
  },
  {
    title: 'Zenn：Vitestの vi.mock は巻き上げられる',
    href: 'https://zenn.dev/you_5805/articles/vitest-mock-hoisting',
    date: '2023.11.06',
  },
  {
    title:
      '登壇：PWA Night vol.54 〜移行〜「PR TIMES での Webpack → Vite 移行事例」',
    href: 'https://pwanight.connpass.com/event/291223/',
    date: '2023.08.23',
  },
  {
    title: 'Zenn：最小限の gssp → App Router 移行パターン集',
    href: 'https://zenn.dev/you_5805/articles/approuter-minimum-migration',
    date: '2023.06.10',
  },
  {
    title: 'Zenn：Vercel はもっと薄く使える',
    href: 'https://zenn.dev/you_5805/articles/vanilla-vercel-functions',
    date: '2023.05.04',
  },
  {
    title: 'Zenn：Contentlayer で記事を markdown 管理する',
    href: 'https://zenn.dev/you_5805/articles/contentlayer',
    date: '2023.05.04',
  },
  {
    title: '「Meetup Studio」をリリースしました',
    href: 'https://meetupstudio.app',
    date: '2023.03.21',
  },
  {
    title:
      'blog.yoiw.dev：app directory の Route Handlers を使う・API Routes からの変更点',
    href: 'https://blog.yoiw.dev/posts/route-handlers',
    date: '2023.03.15',
  },
  {
    title: 'PR TIMES開発者ブログ：Webpack から Vite に段階的に移行しました',
    href: 'https://developers.prtimes.jp/2023/02/08/migrate-from-webpack-to-vite/',
    date: '2023.02.08',
  },
  {
    title:
      'PR TIMES開発者ブログ：PR TIMES フロントエンドにおけるプレビュー環境の自動生成',
    href: 'https://developers.prtimes.jp/2023/02/06/frontend-multi-preview/',
    date: '2023.02.06',
  },
  {
    title: 'PR TIMES開発者ブログ：アクセシビリティ勉強会を開催しました。',
    href: 'https://developers.prtimes.jp/2022/12/27/a11y-workshop/',
    date: '2022.12.27',
  },
  {
    title:
      'PR TIMES開発者ブログ：PR TIMES フロントエンドの React 18 バージョンアップの取り組み',
    href: 'https://developers.prtimes.jp/2022/08/17/upgrade-to-react-18/',
    date: '2022.08.17',
  },
] satisfies {
  title: string;
  href: string;
  date: string;
}[];
