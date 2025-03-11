import { renderHook } from '@testing-library/react';
import usePageTitle from './UsePageTitle';

declare global {
  interface Document {
    _title: string;
  }
}

describe('UsePageTitle', () => {
  it('sets the document title when the pageTitle is updated', () => {
    const setTitle = vi.fn();
    Object.defineProperty(document, 'title', {
      configurable: true,
      get: () => document._title || '',
      set: (value) => {
        document._title = value;
        setTitle(value);
      },
    });

    const { rerender } = renderHook(({ title }) => usePageTitle(title), {
      initialProps: { title: 'Initial Title' },
    });

    expect(setTitle).toHaveBeenCalledWith('Initial Title');

    rerender({ title: 'Updated Title' });

    expect(setTitle).toHaveBeenCalledWith('Updated Title');
  });
});
