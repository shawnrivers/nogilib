import dynamic from 'next/dynamic';

export const PolyfilledLazyImage = dynamic(() => import('./Component'), {
  ssr: false,
});
