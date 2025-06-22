import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WorkshopsSection from './components/sections/WorkshopsSection';
import SedesSection from './components/sections/SedesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import RegistrationSection from './components/sections/RegistrationSection';
import './globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <WorkshopsSection />
          <SedesSection />
          <TestimonialsSection />
          <RegistrationSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
