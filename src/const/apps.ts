export const apps = [
  {
    name: 'Meetup Studio',
    url: 'https://meetupstudio.app',
    imageUrl: '/assets/meetupstudio.png',
    imageAlt: 'Meetup Studio',
  },
  {
    name: 'Queued',
    url: 'https://queued.jp',
    imageUrl: '/assets/queued.png',
    imageAlt: 'Queued',
  },
] satisfies {
  name: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
}[];
