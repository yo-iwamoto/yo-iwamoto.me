export const sns = [
  {
    name: 'X',
    href: 'https://x.com/yoiwamoto',
    imagePath: '/assets/x.png',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/yo-iwamoto',
    imagePath: '/assets/github.svg',
  },
  {
    name: 'Zenn',
    href: 'https://zenn.dev/you_5805',
    imagePath: '/assets/zenn.svg',
  },
] satisfies {
  name: string;
  href: string;
  imagePath?: string;
}[];
