
const Button =(props) => {

return(
        <div>
          <button 
          type={props.type} 
          // value={props.value} 
          // onClick={props.onClick} 
          className={props.className} 
          disabled={props.disabled}>
            {props.children}
          </button>
        </div>
  )
}
export default Button;