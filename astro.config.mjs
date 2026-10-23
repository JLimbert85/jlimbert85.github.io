import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from "rehype-external-links";
import icon from "astro-icon";

export default defineConfig({
    site: "https://jlimbert85.github.io",
    output: "static",
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [
        icon({
            include: {
                ph: ["*"],
            },
        }),
    ],
    markdown: {
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    // Open external links in a new tab
                    target: "_blank",
                    // Security standard for external links
                    rel: ["noopener", "noreferrer"],
                },
            ],
        ],
    },
});
