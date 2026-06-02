export const metadata = {
  title: 'Ferracini Manauara · Dia dos Namorados 2026',
  description: 'O charme dele merece o melhor. Sapatos e acessórios selecionados Ferracini Manauara para presentear quem você ama.',
  openGraph: {
    title: 'Ferracini Manauara · Dia dos Namorados 2026',
    description: 'O charme dele merece o melhor. Sapatos e acessórios selecionados Ferracini Manauara para presentear quem você ama.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4F0EA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
