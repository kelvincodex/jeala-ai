import {ModalConstant} from "@/util/constant/ModalConstant.ts";
import {useSelector} from "react-redux";
import {SampleModal} from "@/component/modal/module/SampleModal.tsx";
import {useEffect} from "react";
import {RootState} from "@/store";
import {ShareModal} from "@/component/modal/module/ShareModal.tsx";

export const Modal = ()=>{
    const baseState = useSelector((state: RootState)=> state.base);
    const dialog = document.getElementById('modal') as HTMLDialogElement;

    useEffect(() => {
        if (baseState.modal?.show){
            dialog?.showModal()
        }else {
            dialog?.close()
        }

    }, [baseState.modal?.show, dialog]);

    if (ModalConstant.sampleModal == baseState.modal?.component){
        return <SampleModal  />
    }
    if (ModalConstant.shareModal == baseState.modal?.component){
        return <ShareModal  />
    }

}