import '../App.css';
import {text} from './text'
import { useAppSelector } from '../hooks/redux';

export default function Experience(){
    const state: any = useAppSelector(state => state.LangSlice);
    const lang: string = state.value;
    return(
        <div className="Block">
            <h2>{text.experience[lang]}</h2>
            <h3>{text.developer[lang]}</h3>
            <p>{text.dev_exp_description[lang]}</p>

            <h3>{text.accountant[lang]}</h3>
            <p><a href='https://rhi.ronesans.com/?lang=en'>{text.rhi[lang]}</a>
                <h6>{text.responsibilities[lang]}</h6>
                <ul>
                    <li>{text.payroll[lang]}</li>
                    <li>{text.suppliers[lang]}</li>
                </ul>
            </p>
        </div>
    )
}