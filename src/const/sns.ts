export const sns = [
  {
    name: 'Bluesky',
    href: 'https://yoiwamoto.bsky.social',
  },
  {
    name: 'Misskey',
    href: 'https://misskey.io/@yoiwamoto',
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@yoiwamoto_',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yoiwamoto',
    imagePath: '/assets/twitter.svg',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/you-5805',
    imagePath: '/assets/github.svg',
  },
] satisfies {
  name: string;
  href: string;
  imagePath?: string;
}[];
