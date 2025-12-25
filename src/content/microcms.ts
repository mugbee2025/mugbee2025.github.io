import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

export const createMicroCMSLoader = (endpoint: string) => {
  return async () => {
    try {
      console.log(`microCMSから${endpoint}データを取得中...`);
      const response = await client.getAllContents({
        endpoint,
      });
      console.log(`${response.length}件の${endpoint}を取得しました`);
      return response;
    } catch (error) {
      console.error(`microCMSからの${endpoint}取得に失敗:`, error);
      return [];
    }
  };
};
