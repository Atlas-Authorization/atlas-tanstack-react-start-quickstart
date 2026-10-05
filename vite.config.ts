import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // Generates the route tree (src/routeTree.gen.ts) and wires the
    // client/server entry points; looks for src/router.tsx.
    tanstackStart(),
    react(),
  ],
});
