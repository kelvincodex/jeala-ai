import React, {useEffect} from "react";

type DefaultModalProps = {
    name: string,
    visible: boolean,
    children?: React.ReactNode,
}
export const DefaultModal = ({name, visible, children}: DefaultModalProps)=>{
    const dialog = document.getElementById(name) as HTMLDialogElement | null;

    useEffect(() => {
        if (visible){
            dialog?.showModal()
        }else {
            dialog?.close()
        }
    }, [dialog, visible]);

    return (
        <dialog id={name} className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {children}
            </div>
        </dialog>
    )
}