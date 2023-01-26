import React from 'react'
import { GrChapterAdd } from 'react-icons/gr'
import { CgFormatText } from 'react-icons/cg'
import { BiImageAdd } from 'react-icons/bi'
import { BsCircle, BsSquare } from 'react-icons/bs'
import { AiOutlineClear, AiOutlineDelete, AiOutlineHighlight } from 'react-icons/ai'
import { HiPencil } from 'react-icons/hi'
import Tooltip from '@mui/material/Tooltip';
import { useButtons } from '../context/CanvasContext';
import { Popover } from '@mui/material'
import { SketchPicker } from 'react-color'

export default function SideBar() {

    const contextValues = useButtons();
    const [openColor, setOpenColor] = React.useState(false);

    return (
        <div className="fixed z-50 top-[85%] md:top-0 left-0 md:h-[100vh] md:w-[10vw] h-[15vh] w-[100vw] flex md:flex-col flex-row items-center justify-center">
            <div className="md:mx-10 md:w-16 w-auto md:max-h-[80vh] border flex md:flex-col flex-row items-center justify-center shadow-lg rounded-lg md:py-8 py-2 px-4 md:text-[1.5rem] text-[1.2rem] gap-8 bg-white">

                {/* <Tooltip title="Add" placement="top"> */}
                <GrChapterAdd className='cursor-pointer text-[1.6rem]' onClick={() => contextValues.addNote(contextValues.canvas)} />
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <BsSquare className='cursor-pointer text-[1.3rem]' onClick={() => contextValues.addRect(contextValues.canvas)} />
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <BsCircle className='cursor-pointer' onClick={() => contextValues.addCircle(contextValues.canvas)} />
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <CgFormatText className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => contextValues.addText(contextValues.canvas)} />
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <label htmlFor="img-input">
                    <BiImageAdd className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' />
                </label>
                <input type="file" id="img-input" accept='image/*' style={{ display: "none" }} onChange={(e) => contextValues.addImage(e, contextValues.canvas)} />
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <HiPencil className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => contextValues.toggleDraw(contextValues.canvas)} />
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <AiOutlineHighlight className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => contextValues.addHighlight(contextValues.canvas)} />
                {/* </Tooltip> */}

                <AiOutlineDelete className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => contextValues.deleteBtn()} />

                {/* <Tooltip title="Add" placement="top"> */}
                <AiOutlineClear className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => contextValues.canvas.clear()} />

                <div className="md:w-[1.8rem] md:h-[1.8rem] w-[1.3rem] h-[1.3rem] rounded-[50%]" style={{ background: contextValues.color }} onClick={(e) => setOpenColor(e.currentTarget)}></div>
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
