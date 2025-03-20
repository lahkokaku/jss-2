export default interface FeaturedProject {
  title: string,
  slug: string,
  techStack: string[],
  shortDescription: string,
  description: {
    introduction: string,
    role?: string
  },
  codeDisclaimer: boolean,
  linkCode: [
    {
      type: string,
      link: string
    }
  ] | null,
  linkWeb: string | null,
  thumbnail: string,
  interfaces: {
    description: string,
    link: string
  }[] | null
}