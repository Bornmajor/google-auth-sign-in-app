# google-auth-sign-in-app
Sample react native app with google sign in authentification feature

# Libraries
1. Used react-native-google-signin/google-signin library link -> https://github.com/react-native-google-signin/google-signin.

# Features of react-native-google-signin/google-signin
1. Support all 3 types of authentication methods (standard, with server-side validation or with offline access (aka server-side access))
2. Promise-based API consistent between Android and iOS
3. Typings for TypeScript and Flow
4. Mock of the native module for testing with Jest
Native sign in buttons

# Usage & installation guide
1. You need to install react-native-google-signin/google-signin. Link -> https://github.com/react-native-google-signin/google-signin.
2. Create a new project with google cloud console link -> https://console.cloud.google.com/?project=alpine-tempo-403807
3. Create a credential Oauth client id from API & Services tab under your project.
4. Application type is Android ,you will need package name and SHA 1 certificate fingerprint of android app to proceed.
5. You will also need to generate another credential Oauth client id in the same project this time application type should be web application.
6. Use the web client id from web application OAuth 2.0 Client ID in configuration google sign in as illustrated in link -> https://github.com/react-native-google-signin/google-signin#configureoptions-void
7. Please read https://github.com/react-native-google-signin/google-signin for more explanation about implementation aspect of google auth sign in.

# Screenshots
<img src="https://github.com/Bornmajor/google-auth-sign-in-app/assets/98744068/2cdaccd6-2bd9-4f79-b944-1f73b1e7f0d2"  width="200" >
<img src="https://github.com/Bornmajor/google-auth-sign-in-app/assets/98744068/0350eebf-3c81-4c42-9ff2-68ab50cf4f14"  width="200" >



https://github.com/Bornmajor/google-auth-sign-in-app/assets/98744068/7fc0bc2c-a3df-457e-885b-12169f38b752

