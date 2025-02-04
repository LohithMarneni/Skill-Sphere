function Card(props) {
    const course = props.course;
    return (
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          The Roadmap for the course {course.courseName} is 
        </h2>
        <div className="space-y-3">
          {course.resources.map((resource) => (
            <a
              key={resource._id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
            >
              <p className="text-gray-600">{resource.description}</p>
              <p className="text-sm text-blue-600 font-medium underline">
                {resource.link}
              </p>
            </a>
          ))}
        </div>
          <a href="">Easy</a>
          <a href="">Medium</a>
          <a href="">Hard</a>
      </div>
    );
  }
  
  export default Card;
  