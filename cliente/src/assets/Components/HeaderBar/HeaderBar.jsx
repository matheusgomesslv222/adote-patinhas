import style from './HeaderBar.module.css'
import { Link } from 'react-router-dom';

export default function HeaderBar() {
  
  return (
    <div className={style.HomeBar}>
      <Link to="/home" className={style.link}><h1>Book Mapper</h1></Link>
    </div>
  )
}
