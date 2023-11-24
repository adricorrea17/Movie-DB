import { useEffect } from 'react';


const defaultLang = 'es';
const languages = {
    'es' : {
        'name': 'Español',
        'code': 'es-ES'
    },
    'en' : {
        'name': 'English',
        'code': 'en-US'
    },
    'pt' : {
        'name': 'português',
        'code': 'pt_PT'
    },
};

function getLanguage(lang) {
    if (lang in languages) {
        return languages[lang]
    }else{
        return false;
    }
}


export class Lang {
    constructor(lang) {
        this.current = lang || defaultLang;
        this.data = {};
    }
    set( lang ) {
        const get = getLanguage(lang);

        this.data = get ? get : getLanguage(defaultLang);
        this.current = get ? lang : defaultLang;
    }
}

export function route(str = '', lang = false) {
    var currentLang = lang || window.lang.current;
    return '/'+ currentLang +'/' + str;
}

export function removePathLanguage(current) {
    const array = current.split("/");
    let pathWithoutLanguage = '';
    
    for(let i in array) {
        if(array[i] === '') continue;
        if(array[i] in languages) continue;
        
        pathWithoutLanguage += array[i];

        if( array.length - 1 != i )
            pathWithoutLanguage += '/';
    }

    return pathWithoutLanguage;
}

export function _(str = '', lang = false) {
    var currentLang = lang || window.lang.current;
    
    if( currentLang === undefined ) return str;
    
    let trans;
    
    try {
        trans = require(`./lang/${currentLang}.json`);
        const translatedStr = trans[str] ? trans[str] : str;

        return translatedStr;
    } catch {

        return str;
    }
}