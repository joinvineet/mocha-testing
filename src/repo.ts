import { reporters } from "mocha";

export default class GitHubRepo {
    owner: string
    name: string
    repoUrl: string

    constructor({ owner, name, repoUrl }: Partial<Pick<GitHubRepo, 'owner' | 'name' | 'repoUrl'>> = {}) {
        this.owner = owner || '';
        this.name = name || '';
        this.repoUrl = repoUrl || '';
    }

    get fullName(): string {
        const { owner, name } = this;
        if (!name) {
            return '';
        }
        return owner ? `${owner}/${name}` : name;
    }

    getReportUrl(): string {
        const url = this.repoUrl;
        if(!url) {
            return '';
        }

        return url;
    }
}