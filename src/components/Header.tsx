import '../App.css';
import {text} from './text'
import { useAppSelector } from '../hooks/redux';

const leter = "https://mail.google.com/mail/u/1/#inbox?compose=CllgCKCHVNCQRfCcDNrZfwQzXXFDSWwTTmGzzlbfXMqVklGXbMRprfnJvPRhnzBtvmVvHrXdCKL";
const cv_pdf = "";

export default function Header(){
    const state: any = useAppSelector(state => state.LangSlice);
    const lang: string = state.value

    return(
        <div id='header'>
            <div className="Block">
                <header>
                    <img src='photo2.jpg' alt='My photo'/>
                    <h2>{text.name[lang]}</h2>
                    <p>JavaScript {text.position[lang]}</p>                
                </header>
                <ul>
                    <li><img src='geo.png' alt="geo logo" />{text.city[lang]}</li>
                    <li className='prefer'><img src='phone.png' alt="phone logo" />+7(916)818-58-21</li>
                    <li><img src='gmail2.png' alt="gmail logo" /><a target='_blank' rel="noreferrer" href={leter}>meerim.art.b@gmail.com</a></li>
                    <li className='prefer'> <img src='tg.png' alt="telegram logo" /><a target='_blank' rel="noreferrer" href="https://web.telegram.org/k/#@W66LIW">@W66LIW</a></li>
                    <li className='GitHub'> <img src='github_logo.png' alt="github logo" /><a target='_blank' rel="noreferrer" href="https://github.com/W66LIW/">GitHub</a></li>
                    {/* <li><img src='cv-icon2.png' alt="cv logo" /><a href={cv_pdf}>{text.pdfCV[lang]}</a></li> */}
                </ul>
            </div>
        </div>
        
        
    )

}