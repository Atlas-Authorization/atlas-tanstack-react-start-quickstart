import { createFileRoute, redirect } from '@tanstack/react-router';
import { fetchServerAuth } from '../auth';

/**
 * A protected route. `beforeLoad` runs the server function that verifies the
 * session; a signed-out visitor is redirected to sign-in before the route
 * loads. The verified identity is threaded into the loader for render.
 */
export const Route = createFileRoute('/dashboard')({
  beforeLoad: async () => {
    const auth = await fetchServerAuth();
    if (!auth.isSignedIn) {
      throw redirect({ to: '/sign-in' });
    }
    return { auth };
  },
  loader: ({ context }) => context.auth,
  component: Dashboard,
});

function Dashboard() {
  const { userId, orgId } = Route.useLoaderData();

  return (
    <main style={{ maxWidth: 560, margin: '3rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Dashboard</h1>
      <p>This page is only reachable when you are signed in.</p>
      <p>
        Your user id is <code>{userId}</code>
        {orgId ? (
          <>
            {' '}
            (org <code>{orgId}</code>)
          </>
        ) : null}
        .
      </p>
    </main>
  );
}
