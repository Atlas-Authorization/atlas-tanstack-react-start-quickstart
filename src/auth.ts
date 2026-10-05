import { fetchAtlasAuth } from '@atlasauth/tanstack-react-start';
import { createServerFn } from '@tanstack/react-start';
import { getWebRequest } from '@tanstack/react-start/server';

/**
 * A server function that verifies the current session. TanStack Start server
 * functions have no `request` argument, so we hand `fetchAtlasAuth` the ambient
 * request getter (`getWebRequest`). Verification is local (JWKS cached
 * in-process); config is read from ATLAS_JWKS_URL / ATLAS_ISSUER in the env.
 */
export const fetchServerAuth = createServerFn({ method: 'GET' }).handler(async () => {
  const { userId, orgId, isSignedIn } = await fetchAtlasAuth(getWebRequest);
  return { userId, orgId, isSignedIn };
});
