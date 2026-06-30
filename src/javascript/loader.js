export async function loadComponent(selector, url) {
    // If url is an absolute path (starts with /), fetch it directly.
    // Otherwise, resolve it relative to this module.
    const resolvedUrl = url.startsWith("/") ? url : new URL(url, import.meta.url).toString();

    const response = await fetch(resolvedUrl);
    if (!response.ok) {
        throw new Error(
            `Failed to load component from ${url} (resolved: ${resolvedUrl}). ` +
            `Status: ${response.status} ${response.statusText} (responseUrl: ${response.url})`
        );
    }

    const html = await response.text();
    const el = document.querySelector(selector);
    if (!el) throw new Error(`Element not found for selector: ${selector}`);
    el.innerHTML = html;
}


