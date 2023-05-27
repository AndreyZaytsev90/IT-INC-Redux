import React from 'react';

type PropsType = {
    name: string
    callBack: () => void
}

export const Button: React.FC<PropsType> = (props) => {
    const {name, callBack} = props

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};
