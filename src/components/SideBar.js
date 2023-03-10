import React, { useEffect } from 'react'
import { GrChapterAdd, GrDocumentDownload } from 'react-icons/gr'
import { CgFormatText } from 'react-icons/cg'
import { BiImageAdd } from 'react-icons/bi'
import { BsCircle, BsSquare } from 'react-icons/bs'
import { AiOutlineClear, AiOutlineDelete, AiOutlineHighlight } from 'react-icons/ai'
import { HiPencil } from 'react-icons/hi'
import { FiSave } from 'react-icons/fi'
import { useButtons } from '../context/CanvasContext';
import { Popover } from '@mui/material'
import { SketchPicker } from 'react-color'
import ExportPopup from './ExportPopup'
export default function SideBar() {

    const contextValues = useButtons();
    const [openColor, setOpenColor] = React.useState(false);
    const [openExporter, setOpenExporter] = React.useState(false);
    const [openTooltip, setOpenTooltip] = React.useState(false);
    useEffect(() => {
        setTimeout(() => {
            setOpenTooltip(false)
        }, 1200)
    },[openTooltip])

    return (
        <div className="fixed z-50 top-[85%] md:top-0 left-0 md:h-[100vh] md:w-max h-[15vh] w-[100vw] flex md:flex-col flex-row items-center justify-center md:mx-16">
            
            <div className="md:mx-10 w-[100%] border max-h-[60vh] flex md:flex-col flex-wrap flex-row items-center justify-center shadow-lg rounded-lg md:py-8 py-2 px-4 md:text-[1.5rem] text-[1.2rem] gap-8 bg-white">
            <div className={`fixed top-28 text-sm bg-slate-900 text-white opacity-90 px-4 py-2 rounded-md right-50 ${openTooltip ? 'block':'hidden'}`}>
                    {openTooltip}
            </div>
                <ExportPopup className="text-[1.5rem] cursor-pointer" open={openExporter} setOpen={setOpenExporter} />
            

                {/* <Tooltip title="Add" placement="top"> */}
                <GrChapterAdd className='cursor-pointer text-[1.6rem]' onClick={() => contextValues.addNote(contextValues.canvas)} onMouseEnter={()=>setOpenTooltip('Notes')} />
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <BsSquare className='cursor-pointer text-[1.3rem]' onClick={() => contextValues.addRect(contextValues.canvas)} onMouseEnter={()=>setOpenTooltip('Square')}/>
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <BsCircle className='cursor-pointer' onClick={() => contextValues.addCircle(contextValues.canvas)} onMouseEnter={()=>setOpenTooltip('Circle')}/>
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <CgFormatText className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => contextValues.addText(contextValues.canvas)} onMouseEnter={()=>setOpenTooltip('Text')}/>
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <label htmlFor="img-input">
                    <BiImageAdd className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onMouseEnter={()=>setOpenTooltip('Image')}/>
                </label>
                <input type="file" id="img-input" accept='image/*' style={{ display: "none" }} onChange={(e) => contextValues.addImage(e, contextValues.canvas)} />
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <HiPencil className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => contextValues.toggleDraw(contextValues.canvas)} onMouseEnter={()=>setOpenTooltip('Pencil')}/>
                {/* </Tooltip> */}

                {/* <Tooltip title="Add" placement="top"> */}
                <AiOutlineHighlight className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => contextValues.addHighlight(contextValues.canvas)} onMouseEnter={()=>setOpenTooltip('Highlight')}/>
                {/* </Tooltip> */}

                <AiOutlineDelete className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => contextValues.deleteBtn()} onMouseEnter={()=>setOpenTooltip('Delete Item')}/>

                {/* <Tooltip title="Add" placement="top"> */}
                <AiOutlineClear className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => contextValues.canvas.clear()} onMouseEnter={()=>setOpenTooltip('Clear All')}/>

                <GrDocumentDownload className="md:text-[1.8rem] text-[1.5rem] cursor-pointer" onClick={() => contextValues.downloadPage()} onMouseEnter={()=>setOpenTooltip('Download Page')}/>
                <FiSave className='md:text-[1.8rem] text-[1.5rem] cursor-pointer' onClick={() => {
                    contextValues.edits[contextValues.currPage] = contextValues.canvas.toObject();
                    setOpenExporter(true);
                }} onMouseEnter={()=>setOpenTooltip('Export')}/>

                <div className="md:w-[1.8rem] md:h-[1.8rem] w-[1.3rem] h-[1.3rem] rounded-[50%] cursor-pointer" style={{ background: contextValues.color }} onClick={(e) => setOpenColor(e.currentTarget)}></div>
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
