import QuillEditor, {Quill, ReactQuillProps} from "react-quill";
import {useCallback, useMemo, useRef} from "react";
import "react-quill/dist/quill.snow.css";

export const QuillTextEditor = ({...props}: ReactQuillProps)=>{
    const quillRef = useRef<QuillEditor>(null);

    const undo ='<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M23.5797 11.9966H9.46579L13.6206 7.84291L11.9967 6.20508L5.04688 13.1549L11.9967 20.1047L13.6206 18.4657L9.46926 14.3132H23.5797C25.4229 14.3132 27.1906 15.0454 28.4939 16.3487C29.7973 17.6521 30.5295 19.4198 30.5295 21.263C30.5295 23.1062 29.7973 24.8739 28.4939 26.1772C27.1906 27.4806 25.4229 28.2128 23.5797 28.2128H14.3133V30.5294H23.5797C26.0373 30.5294 28.3942 29.5531 30.132 27.8153C31.8698 26.0775 32.8461 23.7206 32.8461 21.263C32.8461 18.8054 31.8698 16.4484 30.132 14.7106C28.3942 12.9729 26.0373 11.9966 23.5797 11.9966Z" fill="#212529"/>\n' +
        '</svg>'

    const redo = '<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M13.9109 11.9966H28.0248L23.87 7.84291L25.4939 6.20508L32.4437 13.1549L25.4939 20.1047L23.87 18.4657L28.0213 14.3132H13.9109C12.0677 14.3132 10.3 15.0454 8.99668 16.3487C7.69334 17.6521 6.96113 19.4198 6.96113 21.263C6.96113 23.1062 7.69334 24.8739 8.99668 26.1772C10.3 27.4806 12.0677 28.2128 13.9109 28.2128H23.1773V30.5294H13.9109C11.4533 30.5294 9.09638 29.5531 7.3586 27.8153C5.62081 26.0775 4.64453 23.7206 4.64453 21.263C4.64453 18.8054 5.62081 16.4484 7.3586 14.7106C9.09638 12.9729 11.4533 11.9966 13.9109 11.9966Z" fill="#212529"/>\n' +
        '</svg>'

    const icons = Quill.import("ui/icons");
    icons["undo"] = undo;
    icons["redo"] = redo;

    const myUndo = () => {
        const myEditor = quillRef.current?.getEditor();
        return myEditor?.history.undo();
    }

   const  myRedo = () => {
        const myEditor = quillRef.current?.getEditor();
        return myEditor?.history.redo();
    }

    const imageHandler = useCallback(() => {
        // Create an input element of type 'file'
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        // When a file is selected
        input.onchange = () => {
            const file = input.files?.[0];
            const reader = new FileReader();

            // Read the selected file as a data URL
            reader.onload = () => {
                const imageUrl = reader.result;
                const quillEditor = quillRef.current?.getEditor();

                // Get the current selection range and insert the image at that index
                const range = quillEditor?.getSelection(true);
                quillEditor?.insertEmbed(range!.index, "image", imageUrl, "user");
            };

            console.log('file', file)

            reader.readAsDataURL(file!);
        };
    }, []);
    const Size = Quill.import('formats/size');
    Size.whitelist = [1, '2px', '5px', '10px', '11px', '12px', '14px', '16px', '20px', '25px', '30px', '40px', '45px', '50px'];
    Quill.register(Size, true);

    const modules = useMemo(
        () => ({
            history: {
                delay: 1000,
                maxStack: 100,
                userOnly: false
            },
            toolbar: {
                container: [
                    ['undo'],
                    ['redo'],
                    [{ header: [1,2, 3, 4, false] }],
                    [{font: [] }],
                    ["bold", "italic", "underline", "blockquote", "strike"],
                    [{ color: [] }],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                    ],
                    ["link", "image"],
                    [{ align: [] }],
                    [{ color: [] }, { background: [] }],
                    ['code-block'],
                    ["clean"],
                ],
                handlers: {
                    image: imageHandler,
                    undo : myUndo,
                    redo : myRedo,

                },
            },
            clipboard: {
                matchVisual: true,
            },
        }),
        [imageHandler]
    );



    // const formats = [
    //     "header",
    //     "bold",
    //     "italic",
    //     "underline",
    //     "strike",
    //     "blockquote",
    //     "list",
    //     "bullet",
    //     "indent",
    //     "link",
    //     "image",
    //     "color",
    //     "clean",
    // ];


    return (
        <div className={'w-full'}>
            <QuillEditor
                theme="snow"
                ref={quillRef}
                modules={modules}
                // formats={formats}
                {...props} />
        </div>
    )
}