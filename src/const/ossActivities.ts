export const ossActivities = [
  {
    repo: 'kuma-ui/kuma-ui',
    name: '(chore) Update repository references after the organization transition',
    url: 'https://github.com/kuma-ui/kuma-ui/pull/254',
    date: '2023.08.02',
  },
  {
    repo: 'kuma-ui/kuma-ui',
    name: 'Migrate from jest to vitest',
    url: 'https://github.com/kuma-ui/kuma-ui/pull/92',
    date: '2023.07.04',
  },
  {
    repo: 'kuma-ui/kuma-ui',
    name: 'Add Vitest snapshost test example',
    url: 'https://github.com/kuma-ui/kuma-ui/pull/85',
    date: '2023.06.02',
  },
  {
    repo: 'aspida/pathpida',
    name: 'Next.js 13: src ディレクトリ内の appDir に対応',
    url: 'https://github.com/aspida/pathpida/pull/158',
    date: '2022.12.04',
  },
] satisfies {
  repo: string;
  name: string;
  url: string;
  date: string;
}[];
