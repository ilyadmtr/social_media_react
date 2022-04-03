import React from "react";
import s from "./FormsControl.module.css"

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched;

    return(
        <div className={s.formControl + " " + (hasError ?  s.error : "")}>
            <div><textarea {...input} {...props}/></div>
            {hasError && <div><span>{meta.error}</span></div>}
        </div>
    )
}

export const  Textarea = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return(
        <div className={s.formControl + " " + (hasError ?  s.error : "")}>
            <div><textarea {...input} {...props}/></div>
            {hasError && <div><span>{meta.error}</span></div>}
        </div>
    )
}

export const  Input = (props) => {
    // return <FormControl><input  {...input} {...props}/>></FormControl>
}