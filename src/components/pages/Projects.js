import Project from '../Project';
import EmployeeTracker from '../../assets/Employee-Tracker.png';
import HydroHome from '../../assets/Hydro-Home.png';
import ReadmeGenerator from '../../assets/Readme-Generator.png';
import ScoreSocial from '../../assets/Score-Social.png';
import Slash from '../../assets/Slashed-And-Smashed.png';
import Weather from '../../assets/Weather-Dashboard.png';
function Projects() {
  const projects = [
    {
      title: 'Score Social',
      image: ScoreSocial,
      link: 'https://github.com/dianavw8/ScoreSocial',
      link2: 'https://mighty-cliffs-23244.herokuapp.com/',
    },
    {
      title: 'Slash & Smash',
      image: Slash,
      link: 'https://github.com/jNighton/Horror-Finder',
      link2: 'https://jnighton.github.io/Horror-Finder/',
    },
    {
      title: 'Hydro Home',
      image: HydroHome,
      link: 'https://github.com/beefbones/hydro-home',
      link2: 'https://ancient-anchorage-85467.herokuapp.com/login',
    },
    {
      title: 'Weather Dashboard',
      image: Weather,
      link: 'https://github.com/LBissette/Weather-Dashboard',
      link2: 'https://lbissette.github.io/Weather-Dashboard/',
    },
    {
      title: 'README Generator',
      image: ReadmeGenerator,
      link: 'https://github.com/LBissette/README-Generator',
      link2: 'https://github.com/LBissette/README-Generator',
    },
    {
      title: 'Employee Tracker',
      image: EmployeeTracker,
      link: 'https://github.com/LBissette/Employee-Tracker',
      link2: 'https://github.com/LBissette/Employee-Tracker',
    },
  ];
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map(project => (
        <div key={project.link} className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <Project {...project} />
        </div>
      ))}
    </div>
  );
}
export default Projects;
