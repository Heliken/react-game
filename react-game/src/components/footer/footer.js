import './footer.css';
import githubIcon from './github-icon.svg';
import RsIcon from './rsschool.svg';

export default function Footer() {
  return(
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrap'>
          <a className='footer__link' href='https://github.com/Heliken' target='_blank' rel="noreferrer">
            <img src={githubIcon} alt='github'/>
          </a>
          <a className='footer__link' href='https://rs.school/' target='_blank' rel="noreferrer">
            <img src={RsIcon} alt='rolling scopes'/>
          </a>
        </div>
      </div>
    </footer>
  )
}