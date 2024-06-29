/// <reference types="vite-plugin-svgr/client" />


declare module "*.svg" {
    import * as React from "react";

    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;
    export default ReactComponent;
}

import 'quill';
declare module 'quill' {
    interface Quill {
        history: {
            undo: () => void;
            redo: () => void;
        };
    }
}