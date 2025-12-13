export default {
  logo: <span style={{ fontWeight: 700 }}>Bible Study</span>,
  footer: {
    text: 'Bible Study Notes'
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    float: true,
    title: 'On This Page'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Bible Study'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Personal study notes through Scripture" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#4a3728" />
    </>
  )
}
