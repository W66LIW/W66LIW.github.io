import '../App.css';
import react_logo from '../logo.svg'
import git_logo from '../git-icon.svg' 
import html_logo from '../icons8-html-5.svg'
import css_logo from '../icons8-css3.svg'
import js_gif from '../icons8-javascript.gif'
import redux_logo from '../icons8-redux.svg'
import webpuck from '../icons8-webpack.svg'
import {text} from './text'
import { useAppSelector } from '../hooks/redux';

export default function Skills() {
    const state: any = useAppSelector(state => state.LangSlice);
    const lang: string = state.value
    
    return(
        <div className="Block">
            <h2>{text.skills[lang]}</h2>
            <p id='skills'>
                <ul>
                    <li>JavaScript <img src={js_gif} alt="css logo"/></li>
                    <li id='react'>React <img src={react_logo} className="App-logo" alt="logo"/></li>
                    <li>Redux <img src={redux_logo} alt="css logo"/></li>
                    <li>WebPack <img src={webpuck} alt="css logo"/></li>
                </ul>
                <ul>
                    <li>Git <img src={git_logo} alt="git logo"/></li>
                    <li>HTML5 <img src={html_logo} alt="html logo"/></li>
                    <li>CSS3 <img src={css_logo} alt="css logo"/></li>
                </ul>
            </p>
        </div>    
    )
}