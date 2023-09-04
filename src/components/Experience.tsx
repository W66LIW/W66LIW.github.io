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
            <div className="Dev-experience">
                <p>{text.dev_exp_description[lang]}</p>
                <ul>
                    <li>{text.dev_exp_0[lang]}</li>
                    <li>{text.dev_exp_1[lang]}</li>
                    <li>{text.dev_exp_2[lang]}</li>
                    <li>{text.dev_exp_3[lang]}</li>
                    <li>{text.dev_exp_4[lang]}</li>
                    <li>{text.dev_exp_5[lang]}</li>
                </ul>
            </div>           
            <a href='https://rhi.ronesans.com/?lang=en'>{text.rhi[lang]}</a>
        </div>
    )
}