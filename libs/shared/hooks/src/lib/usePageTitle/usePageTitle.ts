import { useEffect } from 'react';

export function usePageTitle(pageTitle: string) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default usePageTitle;
