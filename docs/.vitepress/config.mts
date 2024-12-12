import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sushi Gateway",
  description: "Lightweight Layer 7 Open Source Gateway",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs-home" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsible: true,
        items: [
          { text: "Quick Start with Docker", link: "/getting-started/docker" },
          {
            text: "Setting Up Sushi Gateway with Postgres",
            link: "/getting-started/postgres",
          },
        ],
      },
      {
        text: "Concepts",
        collapsible: true,
        items: [
          { text: "What is an API Gateway?", link: "/concepts/api-gateway" },
          {
            text: "Sushi Gateway Architecture",
            link: "/concepts/architecture",
          },
          { text: "Routing Mechanisms", link: "/concepts/routing-mechanisms" },
          { text: "Data Persistence", link: "/concepts/data-persistence" },
        ],
      },
      {
        text: "Plugins",
        collapsible: true,
        items: [
          { text: "Basic Authentication", link: "/plugins/basic-auth" },
          { text: "JSON Web Token (JWT)", link: "/plugins/jwt" },
          { text: "API Key Authentication", link: "/plugins/api-key-auth" },
          {
            text: "Mutual Transport Layer Security (MTLS)",
            link: "/plugins/mtls",
          },
          { text: "Bot Protection", link: "/plugins/bot-protection" },
          { text: "CORS", link: "/plugins/cors" },
          { text: "Access Control List", link: "/plugins/acl" },
          { text: "Rate Limiting", link: "/plugins/rate-limiting" },
          { text: "Request Size Limit", link: "/plugins/request-size-limit" },
          { text: "HTTP Log", link: "/plugins/http-log" },
        ],
      },
      {
        text: "Admin REST API",
        collapsible: true,
        items: [
          { text: "Authentication Endpoints", link: "/api/authentication" },
          { text: "Service Management", link: "/api/service" },
          { text: "Route Management", link: "/api/route" },
          { text: "Plugin Management", link: "/api/plugin" },
          { text: "Gateway Configuration", link: "/api/configuration" },
        ],
      },
      {
        text: "Configuration",
        collapsible: true,
        items: [
          { text: "Environment Variables", link: "/configuration/environment" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/rawsashimi1604/sushi-gateway",
      },
    ],
  },
});
