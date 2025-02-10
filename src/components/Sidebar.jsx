import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

const styles = {
  sidebarNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '1.5rem',
    background: `linear-gradient(to bottom, #e100ff26, rgba(255,255,255,0)),
                url('https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379769/bgm_fstup6.png')`,
    borderRight: '1px solid #e9ecef',
    minWidth: '200px',
    height: 'calc(100vh - 80px)',
    marginTop: '80px',
  },
  navButton: {
    padding: '0.75rem 1rem',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '0.95rem',
    fontWeight: '500',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: 'transparent',
    color: '#E8DAB2',
    letterSpacing: '1px',
    width: '100%',
  },
  navButtonActive: {
    backgroundColor: '#9a27a8',
    color: 'white',
    letterSpacing: '2px',
    boxShadow: '0 0 15px rgba(154, 39, 168, 0.3)',
  },
  navButtonDefault: {
    backgroundColor: 'transparent',
    ':hover': {
      letterSpacing: '3px',
      color: '#fff',
      textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
    }
  },
  navLink: {
    textDecoration: 'none',
    width: '100%',
    transition: 'all 0.3s ease',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    flex: '1 1 auto',
  },
  logoutButton: {
    padding: '0.75rem 1rem',
    backgroundColor: 'rgba(255, 77, 77, 0.1)',
    border: '1px solid #ff4d4d',
    borderRadius: '0.5rem',
    color: '#ff4d4d',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.95rem',
    fontWeight: '500',
    letterSpacing: '1px',
    marginBottom: '100px', // This pushes the button to the bottom
    ':hover': {
      backgroundColor: 'rgba(255, 77, 77, 0.2)',
      letterSpacing: '2px',
    }


  }
}

function Sidebar({ activeTab, onTabChange }) {
    const navigate = useNavigate();
    const links = [
      { id: "profile", label: "Profile", path: "/profile" },
      { id: "register", label: "Register Event", path: "/events" },
      { id: "schedule", label: "Schedule", path: "/schedule" },
      { id: "mySchedule", label: "My Schedule", path: "/my-schedule" },
      { id: "QR", label: "My QR", path: "/QR" },

    ]
  
    const handleLogout = () => {
      // Clear any stored authentication
      localStorage.removeItem('isAdminLoggedIn');
      localStorage.removeItem('isUserLoggedIn');
      // Navigate to home page
      navigate('/');
    };
  
    return (
      <nav style={styles.sidebarNav}>
        <div style={styles.linksContainer}>
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              style={styles.navLink}
              onClick={() => onTabChange(link.id)}
            >
              <button
                style={{
                  ...styles.navButton,
                  ...(activeTab === link.id ? styles.navButtonActive : styles.navButtonDefault)
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== link.id) {
                    e.currentTarget.style.letterSpacing = '3px';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== link.id) {
                    e.currentTarget.style.letterSpacing = '1px';
                    e.currentTarget.style.color = '#E8DAB2';
                    e.currentTarget.style.textShadow = 'none';
                  }
                }}
              >
                {link.label}
              </button>
            </Link>
          ))}
        </div>
        
        <button
          onClick={handleLogout}
          style={styles.logoutButton}
        >
          Logout
        </button>
      </nav>
    )
  }
  
  Sidebar.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired
  }
  
  export default Sidebar
  
  