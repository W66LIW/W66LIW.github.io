import '../App.css';
import {text} from './text'
import { useAppSelector } from '../hooks/redux';

export default function Projects() {
    const state: any = useAppSelector(state => state.LangSlice);
    const lang: string = state.value;
    return(
        <div className="Block">
            <h2>{text.projects[lang]}</h2>
            <div className='Projects'>
                <div >
                    <h4><a href="https://github.com/W66LIW/one/tree/webpack/table">{text.table[lang]}</a></h4>
                    <p>{text.table_description[lang]}</p>
                    <p>{text.table_description2[lang]}</p>
                </div>
                <div >
                    <h4><a href="https://github.com/W66LIW/slider">{text.slider[lang]}</a></h4>
                    <p>{text.test_in_chrome[lang]}</p>
                    <ul>
                        <li>{text.about_slider_0[lang]}</li>
                        <li>{text.about_slider_1[lang]}</li>
                        <li>{text.about_slider_2[lang]}</li>
                        <li>{text.about_slider_3[lang]}</li>
                    </ul>
                    
                </div>
                {/* <div >
                    <h4><a href="/project">{text.project[lang]}</a></h4>
                    <p>В работе</p>
                </div> */}
            </div>
        </div>
    )
}