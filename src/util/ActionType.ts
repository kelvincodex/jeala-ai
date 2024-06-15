import {NavigateFunction, NavigateOptions} from "react-router-dom";

export class ActionType {
    static navigate(navigation: NavigateFunction, path: string, options?: NavigateOptions){
        const currentPath = window.location.pathname
        if (currentPath != path){
            navigation(path, options)
        }

        console.log('path', path)
        console.log('currentPath', currentPath)
    }
}