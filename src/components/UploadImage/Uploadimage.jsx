import React from "react";
import {UserIcon} from "@heroicons/react/24/outline";
import Button from "../Button/Button";

export default function Uploadimage() {
    const [fileInput] = React.useState("");
    const [Source,setSource] = React.useState("../../UserDefaultImage.png");
    const handleFile = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setSource(reader.result)
        }
    }
    const handleSubmit = (e) => {
     e.preventDefault();
     if(!Source) return;
     uploadImage(Source);
    }
    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage)
}


    return(
        <>
        <div className={"flex justify-center"}>
        <span className={"mt-4 z-10 border-2 border-black"}>
            {Source &&(
                    <img className={"w-40 h-40"} src={Source} alt={"profile image"}/>
            )}
        </span>
            <div className={"inline-grid ml-9 pb-5"}>
                <label className="cursor-pointer px-6 py-1 mt-4 text-white bg-[#00A2E8] rounded-lg hover:bg-[#00A2E8] w-full mt-7">
                    <p className={"pt-3"}> Change</p>
                    <input className={"hidden"} type="file" accept={"image/*"} onChange={handleFile} value={fileInput}/>
                </label>
                <Button text={"Remove"}/>
                    {/*<Button onSubmit={handleSubmit} text={"Submit"}/>*/}
            </div>
        </div>
        </>
    )
}

