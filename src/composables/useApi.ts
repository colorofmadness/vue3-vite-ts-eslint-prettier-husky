import { createFetch } from '@vueuse/core';

export const useApi = createFetch({
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  fetchOptions: {
    headers: {
      Accept: 'application/json'
    }
  },
  options: {
    refetch: true,
    async beforeFetch({ options }) {
      // const accessToken = useCookie('accessToken').value
      //
      // if (accessToken) {
      //   options.headers = {
      //     ...options.headers,
      //     Authorization: `Bearer ${accessToken}`,
      //
      //   }
      // }

      return { options };
    },
    afterFetch(ctx) {
      const { data, response } = ctx;

      return { data, response };
    }
  }
});
