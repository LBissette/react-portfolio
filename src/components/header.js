import '../styles.css';
import Navigation from "./Navigation";
// import
function Header (props) {
    const links = [
        { text: 'About Me', url: '/about' },
        { text: 'Resume', url: '/resume' },
        { text: 'Contact', url: '/contact' },
      ];
    return(
        <header className="bg-gray-800">
        <div className="container mx-auto flex justify-between items-center py-4">
          <a className="text-white text-2xl font-bold" href="/">
            John Doe
          </a>
          <Navigation links={links} />
        </div>
      </header>
    );
}
export default Header