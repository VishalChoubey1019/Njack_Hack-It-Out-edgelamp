import React from 'react'
import { GrChapterAdd } from 'react-icons/gr'
import { CgFormatText } from 'react-icons/cg'
import { BiImageAdd } from 'react-icons/bi'
import { AiOutlineHighlight } from 'react-icons/ai'
import Tooltip from '@mui/material/Tooltip';
import { useButtons } from '../context/CanvasContext';

export default function SideBar() {

    const contextValues = useButtons();

    return (
        <div className="fixed z-50 top-0 left-0 h-[100vh] flex flex-col items-center justify-center">
            <div className="mx-10 w-16 min-h-[80vh] border flex flex-col items-center justify-center shadow-lg rounded-lg py-2 px-4 text-[1.5rem] gap-8 bg-white">
                {/* <Tooltip title="Add" placement="top"> */}
                <GrChapterAdd className='cursor-pointer' onClick={() => contextValues.addRect(contextValues.canvas)} />
                {/* </Tooltip> */}
                {/* <Tooltip title="Add" placement="top"> */}
                <CgFormatText className='text-[1.8rem] cursor-pointer' onClick={() => contextValues.addText(contextValues.canvas)} />
                {/* </Tooltip> */}
                {/* <Tooltip title="Add" placement="top"> */}
                <label htmlFor="img-input">
                    <BiImageAdd className='text-[1.8rem] cursor-pointer' />
                </label>
                <input type="file" id="img-input" accept='image/*' style={{ display: "none" }} onChange={(e) => contextValues.addImage(e, contextValues.canvas)} />
                {/* </Tooltip> */}
                {/* <Tooltip title="Add" placement="top"> */}
                <AiOutlineHighlight className='text-[1.8rem] cursor-pointer' onClick={() => contextValues.addHighlight(contextValues.canvas)} />
                {/* </Tooltip> */}
            </div>
        </div>
    )
}
