import React, { createContext, useContext, useState } from 'react';
import lightMode from '../assets/img/light-mode-button.png';
import darkMode from '../assets/img/dark-mode-button.png';

const Theme_Context = createContext();

function ThemeContext({children}) {
    // white first
    const [theme, setTheme] = useState(lightMode);
    const [textColor, setTextColor] = useState({color : '#111827'});
    const [bgHeaderTop, setBgHeaderTop] = useState({backgroundColor : '#FFDDA9'}); // orange
    const [bgHeaderBottom, setBgHeaderBottom] = useState({backgroundColor : 'white'}); // dark
    const [heroBg, setHeroBg] = useState({backgroundColor : '#F3F4F6'}); // dark

    const ChangeMode = () =>{
        setTheme(`${theme === lightMode ? darkMode : lightMode}`);
        localStorage.setItem("theme", JSON.stringify(`${theme === lightMode ? darkMode : lightMode}`));

        setTextColor(textColor.color === '#111827' ? {color : 'white'} : {color : '#111827'});
        localStorage.setItem("textColor", JSON.stringify(textColor.color === '#111827' ? {color : 'white'} : {color : '#111827'}));

        setBgHeaderTop(bgHeaderTop.backgroundColor === '#FFDDA9' ? {backgroundColor : '#705227'} : {backgroundColor : '#FFDDA9'});
        localStorage.setItem("bgHeaderTop", JSON.stringify(bgHeaderTop.backgroundColor === '#FFDDA9' ? {backgroundColor : '#705227'} : {backgroundColor : '#FFDDA9'}));

        setBgHeaderBottom(bgHeaderBottom.backgroundColor === 'white' ? {backgroundColor : '#111827'} : {backgroundColor : 'white'});
        localStorage.setItem("bgHeaderBottom", JSON.stringify(bgHeaderBottom.backgroundColor === 'white' ? {backgroundColor : '#111827'} : {backgroundColor : 'white'}));
        
        setHeroBg(heroBg.backgroundColor === '#F3F4F6' ? {backgroundColor : '#030712'} : {backgroundColor : '#F3F4F6'});
        localStorage.setItem("heroBg", JSON.stringify(heroBg.backgroundColor === '#F3F4F6' ? {backgroundColor : '#030712'} : {backgroundColor : '#F3F4F6'}));
    }
    return (
            <Theme_Context.Provider value={{ChangeMode, theme, textColor, bgHeaderTop, bgHeaderBottom, heroBg}}>
                {children}
            </Theme_Context.Provider>
    )
}

const useThemeContext = () =>{
    return useContext(Theme_Context);
}
export {ThemeContext, useThemeContext}