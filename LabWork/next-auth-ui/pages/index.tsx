import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  const router = useRouter()

  const styles = {
    container: {
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto'
    },
    formBox: {
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      textAlign: 'center' as const
    },
    title: {
      color: '#333',
      marginBottom: '30px',
      fontSize: '28px',
      fontWeight: '600'
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '15px'
    },
    button: {
      width: '100%',
      padding: '15px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    secondaryButton: {
      width: '100%',
      padding: '15px',
      background: 'transparent',
      color: '#667eea',
      border: '2px solid #667eea',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  return (
    <>
      <Head>
        <title>Next.js Auth UI</title>
        <meta name="description" content="Authentication UI built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={styles.container}>
        <div style={styles.formBox}>
          <h2 style={styles.title}>Welcome to Auth UI</h2>
          
          <div style={styles.buttonGroup}>
            <Link href="/login" style={styles.button}>
              Sign In
            </Link>
            <Link href="/signup" style={styles.secondaryButton}>
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 