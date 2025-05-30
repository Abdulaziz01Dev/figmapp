import { useEffect, useState } from 'react';

function InternetStatusWrapper({ children }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-800 text-2xl font-bold">
        Internet uzilgan! Iltimos, aloqani tiklang.
      </div>
    );
  }

  return <>{children}</>;
}

export default InternetStatusWrapper;
