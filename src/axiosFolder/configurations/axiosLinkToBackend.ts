interface Secrets {
    apiHost: string;
}

interface Config {
    secrets: Secrets;
}

let cache: Config | null = null;

const environment = import.meta.env.VITE_APP_ENVIRONMENT || "development";

const config = (): Config => {
    if (!cache) {
        cache = Object.freeze({
            secrets: {
                apiHost:
                    environment === "development"
                        ? "http://localhost:3030/"
                        : "http://localhost:3030/"
            },
        });
    }
    return cache;
};

export default config;

// https://royal-blogs-tia.vercel.app/
//"https://localhost:3000/"
// "https://royal-blogs-tia-backend.onrender.com/"