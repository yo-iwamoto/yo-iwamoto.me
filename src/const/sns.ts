export const sns = [
  {
    name: 'X',
    href: 'https://x.com/yoiwamoto',
    imagePath: '/assets/x.png',
  },
  {
    name: 'Bluesky',
    href: 'https://yoiwamoto.bsky.social',
    imagePath: '/assets/bluesky.png',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/you-5805',
    imagePath: '/assets/github.svg',
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@yoiwamoto_',
    imagePath: '/assets/threads.svg',
  },
] satisfies {
  name: string;
  href: string;
  imagePath?: string;
}[];
