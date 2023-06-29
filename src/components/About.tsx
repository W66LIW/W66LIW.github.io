import '../App.css';
import {text} from './text'
import { useAppSelector } from '../hooks/redux';

export default function About(){
    const state: any = useAppSelector(state => state.LangSlice);
    const lang: string = state.value;
    return(
        <div className="Block">
            <h2>{text.about[lang]}</h2>
            <p>{text.about_description[lang]}</p>
        </div>
    )
}