export interface PageContent {
  slug: string;
  title: string;
  hero?: {
    title: string;
    subtitle: string;
    image: string;
  };
  body?: string;
}

export interface CMSClient {
  getPage(slug: string): Promise<PageContent | null>;
  getBlogIndex(): Promise<unknown[]>;
  getBlogPost(slug: string): Promise<unknown | null>;
  getCommunities(): Promise<unknown[]>;
  getAgents(): Promise<unknown[]>;
  getHomeSections(): Promise<unknown[]>;
}

export class SanityCMSClient implements CMSClient {
  async getPage(): Promise<PageContent | null> {
    return null;
  }

  async getBlogIndex(): Promise<unknown[]> {
    return [];
  }

  async getBlogPost(): Promise<unknown | null> {
    return null;
  }

  async getCommunities(): Promise<unknown[]> {
    return [];
  }

  async getAgents(): Promise<unknown[]> {
    return [];
  }

  async getHomeSections(): Promise<unknown[]> {
    return [];
  }
}

export const cmsClient: CMSClient = new SanityCMSClient();
