export const onRequestGet = async ({ env }) => {
  const googleClientId =
    env.GOOGLE_CLIENT_ID ||
    env.GOOGLE_OAUTH_CLIENT_ID ||
    '';

  return new Response(
    JSON.stringify({
      googleClientId,
    }),
    {
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'cache-control': 'no-store',
      },
    }
  );
};
