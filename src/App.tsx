import Home from 'pages/Home';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const App: React.FC = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
