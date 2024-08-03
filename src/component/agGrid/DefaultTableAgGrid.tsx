// import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {GridOptions} from "ag-grid-community";
import Edit from "@/component/agGrid/assets/icons/edit.svg"
import Delete from "@/component/agGrid/assets/icons/delete.svg"
import View from "@/component/agGrid/assets/icons/eye.svg"
import Export from "@/component/agGrid/assets/icons/export.svg"
import Reload from "@/component/agGrid/assets/icons/reload.svg"
import Search from "@/component/agGrid/assets/icons/search.svg"
import {useCallback, useRef} from "react";
export interface DefaultTableAgGridProps extends GridOptions{
    action?: {view?: boolean, delete?: boolean, edit?: boolean, all?: boolean};
    renderViewActions?: (value: any)=>void,
    renderDeleteActions?: (value: any)=>void,
    renderEditActions?: (value: any)=>void,
    reloadAction?: ()=>void,
    filter?: boolean,
    sortable?: boolean,
    floatingFilter?: boolean,
    name?: string,
}
export const DefaultTableAgGrid = ({action, name,reloadAction, floatingFilter=false, filter=true, sortable=false, renderEditActions, renderViewActions, renderDeleteActions, ...props}: DefaultTableAgGridProps)=>{
    const gridRef = useRef<AgGridReact>(null);
    const defaultColDef: DefaultTableAgGridProps['defaultColDef'] = {
        flex: 1,
        filter,
        sortable,
        floatingFilter,
        minWidth: 200,
    }

    const onFilterTextBoxChanged = useCallback(() => {
        gridRef.current!.api.setGridOption(
            "quickFilterText",
            (document.getElementById("filter-text-box") as HTMLInputElement).value,
        );
    }, []);

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function onGridReady(value: any){
        console.log(value)
    }

    const onBtnExport = useCallback((type: "CSV" | "EXCEL") => {
        console.log(props.rowData)
        const random = getRandomInt(10000, 99999)
        if (type == 'CSV'){
            gridRef.current?.api.exportDataAsCsv({
                columnSeparator: ",",
                fileName: `${name}-${random}.csv`
            });
        }else if (type == 'EXCEL'){
            gridRef.current?.api.exportDataAsExcel({
                fileName: `${name}.xlsx`
            });
        }
    }, [name]);

    if ((action?.all || action?.edit || action?.delete || action?.view) && !props.columnDefs?.some(col => col.headerName === 'Actions')) {
        props.columnDefs?.push({
            headerName: "Actions",
            filter: false,
            maxWidth: 120,
            sortable: false,
            cellRenderer: (value: any) => (
                <div className={'flex  items-center gap-2 w-full h-full justify-between '}>
                    {
                        action?.all ?
                            <>
                                <View onClick={() => renderViewActions && renderViewActions(value)} className={'cursor-pointer w-4 h-4'} />
                                <Edit onClick={() => renderEditActions && renderEditActions(value)} className={'cursor-pointer w-4 h-4'} />
                                <Delete onClick={() => renderDeleteActions && renderDeleteActions(value)} className={'cursor-pointer w-4 h-4'} />
                            </> :
                            <>
                                {action?.view && <View onClick={() => renderViewActions && renderViewActions(value)} className={'cursor-pointer w-4 h-4'} />}
                                {action?.edit && <Edit onClick={() => renderEditActions && renderEditActions(value)} className={'cursor-pointer w-4 h-4'} />}
                                {action?.delete && <Delete onClick={() => renderDeleteActions && renderDeleteActions(value)} className={'cursor-pointer w-4 h-4'} />}
                            </>
                    }
                </div>
            ),
        });
    }

    return (
        <div className={'ag-theme-quartz min-h-[500px] w-full'}>
            <div className={'my-4'}>
                <h6 className={'text-[20px] font-bold block'}>{name} {`(${props.rowData?.length})`}</h6>
                <div className={'flex items-center justify-between w-full'}>
                    <label className="input input-bordered flex h-[45px]  items-center gap-2">
                        <input type="text" id={'filter-text-box'} onInput={onFilterTextBoxChanged}  className="grow" placeholder="Search"/>
                        <Search className="h-4 w-4 opacity-70" />
                    </label>

                    <div className="join gap-2">
                        <div className={'dropdown dropdown-bottom join-item'}>
                            <button tabIndex={0}
                                    className={' btn btn-sm btn-primary text-white    flex '}
                            >
                                <Export
                                    className={'w-5 h-5'}/> Export
                            </button>

                            <ul tabIndex={0}
                                className="dropdown-content menu bg-base-100 text-black rounded-box z-[1] w-52 p-2 shadow">
                                <li><a onClick={()=> onBtnExport('EXCEL')}> Xlsx</a></li>
                                <li><a onClick={()=> onBtnExport('CSV')}> CSV</a></li>
                                <li><a onClick={()=> onBtnExport('CSV')}> Xml</a></li>
                                <li><a onClick={()=> onBtnExport('CSV')}> Mail</a></li>
                            </ul>
                        </div>

                        <div className={'join-item'}>
                            <button className={'btn btn-sm btn-primary text-white  tooltip flex tooltip-top'}
                                    data-tip={'Click to reload'} onClick={()=> reloadAction && reloadAction()}><Reload
                                className={'w-5 h-5'}/> Reload
                            </button>
                        </div>

                    </div>

                </div>
            </div>
            <AgGridReact
                ref={gridRef}
                onGridReady={onGridReady}
                defaultColDef={defaultColDef}
                {...props}
            />
        </div>
    )
}