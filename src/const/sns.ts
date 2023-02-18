export const sns = [
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
  imagePath: string;
}[];
