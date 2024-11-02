import style from './Header.module.css'
import ignite from '../assets/ignite-logo.svg';


export default function Header() {
  return (
    <header className={style.header}>
      <img src={ignite} alt='Logotipo do Ignite' />
      <strong>Ignite feed</strong>

    </header>
  )
}