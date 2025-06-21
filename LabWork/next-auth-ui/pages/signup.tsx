import Head from 'next/head'
import Link from 'next/link'

export default function SignupPage() {
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
    inputGroup: {
      marginBottom: '20px',
      textAlign: 'left' as const
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#555',
      fontWeight: '500',
      fontSize: '14px'
    },
    input: {
      width: '100%',
      padding: '15px',
      border: '2px solid #e1e5e9',
      borderRadius: '10px',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      background: '#f8f9fa',
      boxSizing: 'border-box' as const
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
      marginTop: '10px'
    },
    formFooter: {
      marginTop: '25px',
      paddingTop: '20px',
      borderTop: '1px solid #e1e5e9',
      textAlign: 'center' as const
    },
    link: {
      color: '#667eea',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s ease'
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up - Next.js Auth</title>
        <meta name="description" content="Sign up page for Next.js Auth UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={styles.container}>
        <div style={styles.formBox}>
          <h2 style={styles.title}>Create Account</h2>
          
          <form>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Username</label>
              <input 
                style={styles.input}
                placeholder="Choose a username" 
                required 
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input 
                style={styles.input}
                type="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input 
                style={styles.input}
                type="password" 
                placeholder="Create a password" 
                required 
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Confirm Password</label>
              <input 
                style={styles.input}
                type="password" 
                placeholder="Confirm your password" 
                required 
              />
            </div>
            <button style={styles.button}>Create Account</button>
          </form>
          
          <div style={styles.formFooter}>
            <p style={{ color: '#555', fontSize: '14px' }}>
              Already have an account?{' '}
              <Link href="/login" style={styles.link}>
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 