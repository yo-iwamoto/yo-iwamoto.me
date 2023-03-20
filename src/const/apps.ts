export const apps = [
  {
    name: 'Meetup Studio',
    url: 'https://meetupstudio.app',
    imageUrl: '/assets/meetupstudio.png',
    imageAlt: 'Meetup Studio',
  },
] satisfies {
  name: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
}[];
