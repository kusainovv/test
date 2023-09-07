import React from "react";
import style from './Style.module.scss';

export interface CheckboxProps {
    onSelect: Function,
    onUnSelect: Function,
    value?: boolean | undefined
}

export const Checkbox = (props: CheckboxProps) => {
    return <>
        <input type="checkbox" checked={props.value} onChange={(e) => {
            if (e.target.checked) {
                props.onSelect()
            } else {
                props.onUnSelect();
            }
        }} className={style['DialoguesCheckbox']} />
    </>
}