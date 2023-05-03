export const activities = [
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
