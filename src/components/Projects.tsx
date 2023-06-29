import '../App.css';
import {text} from './text'
import { useAppSelector } from '../hooks/redux';

export default function Projects() {
    const state: any = useAppSelector(state => state.LangSlice);
    const lang: string = state.value;
    return(
        <div className="Block">
            <h2>{text.projects[lang]}</h2>
            <div>
                <div>
                    <h4><a href="">1</a></h4>
                </div>
                <div>
                    <h4><a href="">2</a></h4>
                </div>
            </div>
        </div>
    )
}