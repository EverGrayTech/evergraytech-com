function getAppRegistry() {
    if (!Array.isArray(window.EverGrayTechAppRegistry)) {
        return [];
    }

    return window.EverGrayTechAppRegistry.slice();
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function resolveUrl(url, baseUrl) {
    if (!url) {
        return '';
    }

    try {
        return new URL(url, baseUrl).toString();
    } catch (error) {
        return url;
    }
}

async function fetchAppMetadata(registryEntry) {
    const response = await fetch(registryEntry.metadataUrl, {
        headers: {
            Accept: 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Metadata request failed with status ' + response.status);
    }

    const payload = await response.json();

    if (!payload || typeof payload !== 'object') {
        throw new Error('Metadata response was not a valid object');
    }

    return normalizeAppMetadata(payload, registryEntry);
}

function normalizeAppMetadata(payload, registryEntry) {
    const metadataUrl = registryEntry.metadataUrl;
    const metadataBaseUrl = new URL(metadataUrl).toString();
    const overview = payload.overview && typeof payload.overview === 'object' ? payload.overview : {};
    const urls = payload.urls && typeof payload.urls === 'object' ? payload.urls : {};
    const assets = payload.assets && typeof payload.assets === 'object' ? payload.assets : {};

    return {
        version: payload.version || '',
        slug: payload.slug || registryEntry.slug,
        name: payload.name || registryEntry.slug,
        tagline: payload.tagline || '',
        shortDescription: payload.shortDescription || '',
        status: payload.status || 'Active',
        assets: {
            logo: resolveUrl(assets.logo, metadataBaseUrl)
        },
        urls: {
            app: resolveUrl(urls.app, metadataBaseUrl),
            repo: resolveUrl(urls.repo, metadataBaseUrl),
            docs: resolveUrl(urls.docs, metadataBaseUrl)
        },
        capabilities: Array.isArray(payload.capabilities) ? payload.capabilities : [],
        overview: overview,
        metadataUrl: metadataUrl
    };
}

function initRevealObserver() {
    if (!('IntersectionObserver' in window)) {
        return;
    }

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    document.querySelectorAll('.reveal').forEach(function (element) {
        observer.observe(element);
    });
}

window.EverGrayTechAppsData = {
    getAppRegistry: getAppRegistry,
    fetchAppMetadata: fetchAppMetadata,
    escapeHtml: escapeHtml,
    resolveUrl: resolveUrl,
    initRevealObserver: initRevealObserver
};
