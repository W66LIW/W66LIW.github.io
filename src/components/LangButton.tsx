import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { langSlice } from '../store/redusers/LangSlice';


export default function LangButton(){
    
    const dispatch = useAppDispatch();
    const state: any = useAppSelector(state => state.LangSlice);
    let lang: string;
    
    if(state.value == 'ru'){
         lang = 'eng'
    } else {
         lang = 'ru'
    }

    const {change} = langSlice.actions;
    function changeLang(){
        dispatch(change())
       
        // location.href = window.location.pathname + '#' + lang
        // location.reload()
    }
    // useEffect(() => { // после редакс
    //     if(lang === 'ru'){
    //         document.title = 'Резюме';
    //     } else {
    //         document.title = 'CV';
    //     }
    // }, [])
    return(
        <button onClick={()=>dispatch(change())}>{lang}</button>
    )
}