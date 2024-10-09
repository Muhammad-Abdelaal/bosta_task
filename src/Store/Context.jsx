import React, { useState } from "react";

import Ar from '../Lang/Ar';
import En from "../Lang/En";
import { useLocation, useNavigate} from "react-router-dom";
import { useTranslation } from "react-i18next";

const ROOT = document.getElementById('root');

const Context = React.createContext();

export function StoreProvider (props) {
    const {i18n} = useTranslation()
    const location = useLocation();
    const navigate = useNavigate();

    const path = location.pathname;
    const pathNoLocale = path.split('/').toSpliced(0,2).join('/');

    const initState = {
        langState:'en',
        lang:En,
        isMenuOpen:false,
    }
    const [currentState, setCurrentState] = useState(initState);
    const functions = {
        changeLangState:(lang) => {
            if (lang) {
                i18n.changeLanguage(lang); 

                navigate(`/${lang}/${pathNoLocale ? pathNoLocale :''}`, { replace: true });
                setCurrentState({langState:lang, lang:lang === 'ar' ? Ar : En});
                ROOT.dir = i18n.dir();
            }
            
        },
        switchMenuHandler: () => {
            setCurrentState({...currentState,isMenuOpen:!currentState.isMenuOpen})
        },
    }

    const data = {
        functions,
        lang:currentState.lang,
        langState:currentState.langState,
        isMenuOpen:currentState.isMenuOpen,
    }

    return <Context.Provider value={data}> {props.children} </Context.Provider>
 }
 
 export default Context;