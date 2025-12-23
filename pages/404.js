import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Custom404() {
  const router = useRouter()
  const [linkInfo, setLinkInfo] = useState({
    url: 'https://www.biblegateway.com/passage/?search=Matthew%201&version=NIV',
    text: 'Matthew 1'
  })

  useEffect(() => {
    // Extract book and chapter from path (client-side only to avoid hydration mismatch)
    const pathParts = router.asPath.split('/').filter(Boolean)

    if (pathParts.length >= 2) {
      const book = pathParts[0]
      const chapter = pathParts[1]

      // Map book names to BibleGateway format
      const bookMap = {
        matthew: 'Matthew',
        psalms: 'Psalm',
        proverbs: 'Proverbs'
      }

      const bookName = bookMap[book.toLowerCase()]

      if (bookName) {
        // Parse chapter number (remove leading zeros)
        const chapterNum = parseInt(chapter, 10)

        if (!isNaN(chapterNum)) {
          setLinkInfo({
            url: `https://www.biblegateway.com/passage/?search=${encodeURIComponent(bookName)}%20${chapterNum}&version=NIV`,
            text: `${bookName} ${chapterNum}`
          })
        }
      }
    }
  }, [router.asPath])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <p style={{
          fontSize: '1.3rem',
          lineHeight: '1.8',
          color: '#555',
          marginBottom: '2.5rem',
          fontStyle: 'italic'
        }}>
          "Your word is a lamp to my feet<br />
          and a light to my path."<br />
          <span style={{ fontSize: '1rem', color: '#888', fontStyle: 'normal' }}>— Psalm 119:105</span>
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          This page is still being written.<br />
          In the meantime, continue your journey in God's Word:
        </p>
        <a
          href={linkInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0051cc'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
        >
          Read {linkInfo.text} on Bible Gateway →
        </a>
      </div>
    </div>
  )
}
