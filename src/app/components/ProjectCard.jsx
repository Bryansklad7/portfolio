import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({ logo, name, content, link }) => {
  return (
    <div className="bg-white hover:bg-blue-100 transition-colors duration-300 rounded-lg p-6 shadow hover:shadow-lg transform hover:-translate-y-1 w-full max-w-md">
    <div className="flex items-center gap-4 mb-4">
      <img src={logo} alt={name} width={50} height={50} className="rounded-full object-cover" />
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
    <p className="text-gray-600 mb-2">{content}</p>
    <div className="flex items-center gap-2 text-blue-600">
     
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {link}
      </a>
    </div>
  </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;