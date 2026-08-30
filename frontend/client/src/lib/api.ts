const apiBaseUrl = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

/** API base URL. Set VITE_API_URL for a separately deployed frontend. */
export const apiUrl = (path: string) => `${apiBaseUrl}/${path.replace(/^\//, '')}`;
