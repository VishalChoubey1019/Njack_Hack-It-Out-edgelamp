import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Body(){
    return(
        <div>
            <div className="md:flex md:items-center md:justify-between px-6 py-4 shadow-md bg-white text-white text-left">
                <img src="./navLogo.png" className="ml-8" width={140} alt="" />
                <a href="https://github.com/VishalChoubey1019/Njack_Hack-It-Out-edgelamp"><AiFillGithub className="text-4xl text-black mr-16" /></a>
            </div>
            <h1 className="text-3xl font-serif text-center pt-5 text-[#ff0f00]"><b>How to use EdgeLamp</b></h1>
            <ol className="orderedList text-indigo-600 text-white text-black mt-5 ml-40 mr-80 p-10 z-50 rounded-2xl">
                <li className="points shadow-md z-50 py-5 px-4"> <b> 1. Upload a PDF</b></li>
                <li className="points shadow-md z-50 py-5 px-4"> <b> 2. You can now view the PDF</b></li>
                <li className="points shadow-md z-50 pt-5 px-4 pb-5"> <b> 3. There are various tools using which the PDF can be edited</b>
                    <ul>
                        <li className="tool pt-7 py-3 shadow-lg p-10 z-70 text-indigo-420"><b>Bookmark</b> <br/><p className="px-10 py-3 text-indigo-400">-  Allows users to add a bookmark on any page of the PDF document.</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-71 text-indigo-420"><b>Rectangle</b>  <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to add a rectangle shape on any page of the PDF document.</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-72 text-indigo-420"><b>Circle</b> <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to add a circle shape on any page of the PDF document..</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-73 text-indigo-420"><b>Text Box</b>  <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to add an editable text box on any page of the PDF document.</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-74 text-indigo-420"><b>Image</b>  <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to add an image on any page of the PDF document.</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-73 text-indigo-420"><b>Pencil</b>  <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to draw any shape or make freehand annotations on the PDF document.</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-72 text-indigo-420"><b>Highlighter</b>  <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to highlight any text or image on any page of the PDF document.</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-71 text-indigo-420"><b>Delete</b>  <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to remove unwanted annotations or shapes from the PDF document.</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-70 text-indigo-420"><b>Delete All</b>  <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to clear all annotations or shapes from a specific page of the PDF document.</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-70 text-indigo-420"><b>Download PDF</b>  <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to download the updated PDF document in .pdf format.</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-70 text-indigo-420"><b>Download Page</b>  <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to download a specific page from the PDF document in .pdf format.</p></li>
                        <li className="tool py-5 shadow-lg p-10 z-69 text-indigo-420"><b>Colour Picker</b>  <br/><p className="px-10 py-3 text-indigo-400">-     Allows users to pick a color of their choice. <br/> - The selected color will be applied to all subsequent annotations or shapes created with the other tools</p></li>                    
                    </ul>
                </li>
            </ol>
        </div>
    )
}