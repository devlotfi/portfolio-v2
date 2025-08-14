export interface ProjectType {
  id: string;
  title: string;
  description: string;
  logo: string;
  thumbnail: string;
  repository: string;
  website: string | null;
  highlighted: boolean;
  repositoryName: string;
}
