import '../App.css';
import {text} from './text'
import { useAppSelector } from '../hooks/redux';

export default function Education() {
    const state: any = useAppSelector(state => state.LangSlice);
    const lang: string = state.value;    
    return(
        <div className="Block">
            <h2>{text.education[lang]}</h2>
            <h6>{text.auditor[lang]}</h6>
            <p className="Education">
                <span>{text.mfua[lang]}</span>
                <span>2025</span>
            </p>
            <h6>{text.accountant[lang]}</h6>   
            <p className="Education">
                <span>{text.mfua[lang]}</span>
                <span>2020</span>
            </p>


        </div>
    )
}