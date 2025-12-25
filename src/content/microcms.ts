import { createClient } from 'microcms-js-sdk';

const { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } = import.meta.env;

if (!MICROCMS_SERVICE_DOMAIN || !MICROCMS_API_KEY) {
  throw new Error(
    'microCMSの環境変数(MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY)が設定されていません。'
  );
}

const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
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
