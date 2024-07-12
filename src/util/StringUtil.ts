import {useLocation} from "react-router-dom";

export class StringUtil{
    static doesUrlEndWith(suffix: string, url: string= window.location.href) {
        console.log(url.endsWith(suffix))
        return url.endsWith(suffix);
    }

    static useUrlSuffix(suffixes: string[]) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const location = useLocation();
        // return location.pathname.endsWith(suffix) || location.hash.endsWith(suffix);
        // const location = useLocation();
        return suffixes.some(suffix => location.pathname.endsWith(suffix) || location.hash.endsWith(suffix));

    }
}