import classes from './UI.module.css';

function Card({style, children, className}) {
  return (
    <div style={style} className={`${classes.card} ${className}`}>{children}</div>
  )
}

export default Card