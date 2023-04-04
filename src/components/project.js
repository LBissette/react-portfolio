import '../styles.css';
const Project = ({ image, title, link, link2 }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img className="w-full h-auto" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-200">{title}</h3>
        <div className="flex justify-between items-center mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-gray-700 rounded-lg text-gray-200 hover:bg-gray-600 transition duration-300"
          >
            View Repo
          </a>
          <a
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-gray-700 rounded-lg text-gray-200 hover:bg-gray-600 transition duration-300"
          >
            View Deployment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
