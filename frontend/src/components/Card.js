
const Card = (props) => {


  return (
  <>
    <div className="image-container">
      <img src={props.img} alt=""/>
    </div>
    <div className="card-content">
      <div className="card-title">
        <h3> {props.title} </h3>
      </div>
      <div className="card-body">
        <p> {props.body} </p>
      </div>
    </div>      
</>
  )
}
export default Card;
