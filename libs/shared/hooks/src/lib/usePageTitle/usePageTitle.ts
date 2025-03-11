import { useEffect } from 'react';

export function usePageTitle(pageTitle: string) {
  useEffect(() => {
    console.log('test');
    document.title = pageTitle;
  }, [pageTitle]);
}

export default usePageTitle;
