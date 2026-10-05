import { AtlasProvider, SignedIn, SignedOut, UserButton } from '@atlasauth/tanstack-react-start';
import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'atlas-tanstack-react-start-quickstart' },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <AtlasProvider
        publishableKey={import.meta.env.VITE_ATLAS_PUBLISHABLE_KEY ?? ''}
        frontendApi={import.meta.env.VITE_ATLAS_FRONTEND_API ?? 'https://atlasauth.net'}
      >
        <header
          style={{
            maxWidth: 560,
            margin: '1.5rem auto 0',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <span style={{ marginLeft: 'auto' }}>
            <SignedOut>
              <Link to="/sign-in">Sign in</Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </span>
        </header>
        <Outlet />
      </AtlasProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
