import React from 'react'
import { GrChapterAdd } from 'react-icons/gr'
import { CgFormatText } from 'react-icons/cg'
import Tooltip from '@mui/material/Tooltip';
import { useButtons } from '../context/CanvasContext';

export const SideBar = () => {

    const contextValues = useButtons();

    return (
        <div className="fixed z-999 top-0 left-0 h-[100vh] flex flex-col items-center justify-center">
            <div className="mx-[5vw] w-[5vw] min-h-[80vh] border flex flex-col items-center justify-center shadow-lg rounded-lg py-2 px-4 text-[1.5rem] gap-8">
                <Tooltip title="Add" placement="top">
                    <GrChapterAdd className='cursor-pointer' onClick={() => contextValues.addRect(contextValues.canvas)} />
                </Tooltip>
                <Tooltip title="Add" placement="top">
                    <CgFormatText className='text-[1.8rem] cursor-pointer' onClick={() => contextValues.addText(contextValues.canvas)} />
                </Tooltip>
            </div>
        </div>
    )
}
