import React, {useEffect} from "react";

type DefaultModalProps = {
    children?: React.ReactNode,
}

export const DefaultModal = ({ children}: DefaultModalProps)=>{

    useEffect(() => {

    }, []);

    return (
        <dialog  id={'modal'} className="modal">
            <div className="modal-box">
                <form  method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {children}
            </div>
        </dialog>
    )
}