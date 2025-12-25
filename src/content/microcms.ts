import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const createMicroCMSLoader = (endpoint: string) => {
  return async () => {
    try {
      const response = await client.getAllContents({
        endpoint,
      });
      return response;
    } catch (error) {
      console.error(`microCMSからの${endpoint}取得に失敗:`, error);
      return [];
    }
  };
};
