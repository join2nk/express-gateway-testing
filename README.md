# express-gateway-testing
## Problem Description

I'm experimenting with integrating Express Gateway and a Next.js app. To improve performance, I'm considering serving the `public` directory directly through Express, but this would bypass Next.js's built-in image optimization features.

This is being done by linking the `public` directory to the Express static folder, allowing Express to serve static assets directly.

### Challenges

- Serving static assets via Express means losing Next.js image optimization.
- Alternatives considered:
    - Linking the `public` directory to a different base path (e.g., `/public/app`).
    - Creating a utility function to import assets from the `public` folder.
    - Importing images directly in components.

### Suggestions Needed

Looking for advice on:
- Best practices for serving static assets in this setup.
- Ways to retain image optimization while using Express Gateway.
- Any recommended approaches or tools for this scenario.
