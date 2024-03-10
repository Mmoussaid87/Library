export const oktaConfig = {
    clientId: '0oab0oqujwqIV64WZ5d7',
    issuer: 'https://dev-14894549.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}