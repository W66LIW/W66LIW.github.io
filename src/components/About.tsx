import '../App.css';
import {text} from './text'
import { useAppSelector } from '../hooks/redux';

export default function About(){
    const state: any = useAppSelector(state => state.LangSlice);
    const lang: string = state.value;
    return(
        <div className="Block About">
            <h2>{text.about[lang]}</h2>
            <div>
                <p>{text.about_description_1[lang]}</p>
                <p>{text.about_description_2[lang]}</p>
                <p>{text.about_description_3[lang]}
                    <ul>
                        <li><a href="https://learn.javascript.ru/">learn.javascript.ru</a></li>
                        <li><a href="https://www.freecodecamp.org/">freecodecamp.org</a></li>
                        <li>{text.about_description_3_1[lang]}</li>
                    </ul>

                </p>
                <p>{text.about_description_4[lang]}</p>
            </div>
            
        </div>
    )
}