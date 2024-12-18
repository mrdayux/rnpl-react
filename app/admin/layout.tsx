import ReactBricksApp from '@/app/admin/ReactBricksApp'
import { ThemeProvider } from '@/components/themeProvider'

import '@/css/styles.css'

export const metadata = {
  title: 'RNPL Admin',
  description: 'RNPL Admin to create and manage content',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-gray-900`}>
        <ThemeProvider
          attribute="class"
          storageKey="color-mode"
          enableSystem={false}
          defaultTheme="light"
        >
          <main>
            <ReactBricksApp>{children}</ReactBricksApp>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
