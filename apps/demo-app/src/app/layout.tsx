import './global.scss';

import '@nx-demo-multi-app/shared-styles';

export const metadata = {
  title: 'Welcome to nx-demo-multi-app',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
