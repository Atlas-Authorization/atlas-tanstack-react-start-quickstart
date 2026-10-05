import { SignedIn, SignedOut, useUser } from '@atlasauth/tanstack-react-start';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const { user } = useUser();

  return (
    <main style={{ maxWidth: 560, margin: '3rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>atlas-tanstack-react-start-quickstart</h1>
      <p>A starter TanStack Start app wired up with Atlas auth.</p>

      <SignedOut>
        <p>
          You are signed out. <Link to="/sign-in">Sign in</Link> to continue.
        </p>
      </SignedOut>

      <SignedIn>
        <p>Signed in as {user?.first_name ?? user?.id}.</p>
        <p>
          <Link to="/dashboard">Go to your dashboard</Link>
        </p>
      </SignedIn>
    </main>
  );
}
