import '../styles.css';
import Navigation from './Navigation';
// import
function Header(props) {
  const links = [
    { text: 'About Me', url: '/about' },
    { text: 'Resume', url: '/resume' },
    { text: 'Contact', url: '/contact' },
  ];
  return (
    <header className="bg-sky-900">
      <div className="container mx-10 flex justify-between items-center py-4">
          Logan Bissette
        <Navigation links={links} />
      </div>
    </header>
  );
}
export default Header;
