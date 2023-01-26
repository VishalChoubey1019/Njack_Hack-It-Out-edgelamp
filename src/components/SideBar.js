import React from 'react'
import { GrChapterAdd } from 'react-icons/gr'
import { CgFormatText } from 'react-icons/cg'
import { BiImageAdd } from 'react-icons/bi'
import { BsCircle } from 'react-icons/bs'
import { AiOutlineClear, AiOutlineDelete, AiOutlineHighlight } from 'react-icons/ai'
import { HiPencil } from 'react-icons/hi'
import Tooltip from '@mui/material/Tooltip';
import { useButtons } from '../context/CanvasContext';
import { Popover } from '@mui/material'
import { SketchPicker } from 'react-color'

export default function SideBar() {

    const contextValues = useButtons();
    const [openColor, setOpenColor] = React.useState(false);

    const colorSelector = () => {

    }

    return (
        <div className="fixed z-50 top-0 left-0 h-[100vh] flex flex-col items-center justify-center">
            <div className="mx-10 w-16 max-h-[80vh] border flex flex-col items-center justify-center shadow-lg rounded-lg py-8 px-4 text-[1.5rem] gap-8 bg-white">
                {/* <Tooltip title="Add" placement="top"> */}
                <GrChapterAdd className='cursor-pointer' onClick={() => contextValues.addRect(contextValues.canvas)} />
                {/* </Tooltip> */}
                {/* <Tooltip title="Add" placement="top"> */}
                <BsCircle className='cursor-pointer' onClick={() => contextValues.addCircle(contextValues.canvas)} />
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
                <HiPencil className='text-[1.8rem] cursor-pointer' onClick={() => contextValues.addHighlight(contextValues.toggleDraw(contextValues.canvas))} />
                {/* </Tooltip> */}
                {/* <Tooltip title="Add" placement="top"> */}
                <AiOutlineHighlight className='text-[1.8rem] cursor-pointer' onClick={() => contextValues.addHighlight(contextValues.canvas)} />
                {/* </Tooltip> */}
                {/* <Tooltip title="Add" placement="top"> */}
                <AiOutlineClear className='text-[1.8rem] cursor-pointer' onClick={() => contextValues.canvas.clear()} />

                <div className="w-[1.8rem] h-[1.8rem] rounded-[50%]" style={{ background: contextValues.color }} onClick={(e) => setOpenColor(e.currentTarget)}></div>
                <Popover
                    id="simple-popover"
                    open={Boolean(openColor)}
                    anchorEl={openColor}
                    onClose={() => setOpenColor(null)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <SketchPicker
                        color={contextValues.color}
                        onChangeComplete={col => contextValues.setColor(col.hex)}
                    />
                </Popover>
            </div>
        </div >
    )
}
