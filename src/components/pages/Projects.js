import Project from "../Project";

function Projects () {
    const projects = [
        {
            title: 'Score Social',
            image: 'https://github.com/LBissette/react-portfolio/blob/main/src/assets/Score-Social.png',
            link: 'https://github.com/dianavw8/ScoreSocial',
            link2: 'https://mighty-cliffs-23244.herokuapp.com/'
        },
        {
           title: 'Slash & Smash',
           image: 'https://github.com/LBissette/react-portfolio/blob/main/src/assets/Slashed-And-Smashed.png',
           link: 'https://github.com/jNighton/Horror-Finder',
           link2: 'https://jnighton.github.io/Horror-Finder/'
        },
        {
            title: 'Hydro Home',
            image: 'https://github.com/LBissette/react-portfolio/blob/main/src/assets/Hydro-Home.png',
            link: 'https://github.com/beefbones/hydro-home',
            link2: 'https://ancient-anchorage-85467.herokuapp.com/login'
        },
        {
            title: 'Weather Dashboard',
            image: 'https://github.com/LBissette/react-portfolio/blob/main/src/assets/Weather-Dashboard.png',
            link: 'https://github.com/LBissette/Weather-Dashboard',
            link2: 'https://lbissette.github.io/Weather-Dashboard/'
        },
        {
            title: 'README Generator',
            image: 'https://github.com/LBissette/react-portfolio/blob/main/src/assets/Readme-Generator.png',
            link: 'https://github.com/LBissette/README-Generator',
            link2: 'https://github.com/LBissette/README-Generator'
        },
        {
            title: 'Employee Tracker',
            image: 'https://github.com/LBissette/react-portfolio/blob/main/src/assets/Employee-Tracker.png',
            link:  'https://github.com/LBissette/Employee-Tracker',
            link2: 'https://github.com/LBissette/Employee-Tracker'
         },    
      ];
    return(
        <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
            <div key={project.link} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <Project {...project} />
            </div>
        ))}
        </div>
    );
}
export default Projects