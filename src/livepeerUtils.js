import {
    LivepeerConfig,
    createReactClient,
    studioProvider,
  } from '@livepeer/react';

  export const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: "7359485d-533d-47e3-85c1-17c4ff4a4c5e",
    }),
  });
   