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
                </div>
                {/* <div>
                     <h4><a href="">2</a></h4> 
                </div> */}
            </div>
        </div>
    )
}