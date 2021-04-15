class Network {
    constructor({ host }) {
        this.host = host;
    }

    parseManifestUrl({ url, fileResolution, fileResolutionTag, hostTag }) {
        return url.replace(fileResolutionTag, fileResolution).replace(hostTag, this.host);
    }

    async fetchFile(url) {
        const response = await fetch(url);
        return response.arrayBuffer();
    }

}