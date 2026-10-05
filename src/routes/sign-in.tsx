import { SignIn } from '@atlasauth/tanstack-react-start';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/sign-in')({
  component: SignInRoute,
});

function SignInRoute() {
  return (
    <main style={{ maxWidth: 420, margin: '3rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <SignIn />
    </main>
  );
}
