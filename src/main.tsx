import 'simplebar';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ThemeConfig from '@/theme';
import ScrollToTop from '@/components/ScrollToTop';
import Router from '@/routes';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading</p>}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <BrowserRouter>
              <ReactQueryDevtools initialIsOpen={true} />
              <App />
            </BrowserRouter>
          </RecoilRoot>
        </QueryClientProvider>
      </HelmetProvider>
    </Suspense>
  </React.StrictMode>,
);
