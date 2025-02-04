import PropTypes from 'prop-types';
function Card(props) {
  return (
    <div className="rounded-lg p-5 drop-shadow-xl bg-gray-50 w-1/4 hover:scale-105 transition-all duration-200 cursor-pointer">
        <p className="font-extrabold p-2 text-xl text-center">{props.heading}</p>
        { props.text ? <p className="p-2 text-center">{props?.text}</p> : <></>}
    </div>
  )
}
Card.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,    
};
export default Card