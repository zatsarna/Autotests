import React from 'react'
import {AffairType} from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {

        // пропс.функция(мне нужен _id)
        return props.deleteAffairCallback(props.affair._id)
        // давайте проследим боевой путь это функции, или как она будет всплывать:
        // отсюда она всплывет в компоненту Affairs вместе с _id ->
        // далее из Affairs всплывет в HW2->
        // в HW2 находим deleteAffairCallback- это и есть наш клиент ->
        // deleteAffairCallback вызовет setAffairs(...) и   deleteAffair(...)
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div
            id={'hw2-affair-' + props.affair._id}
            className={affairClass}
        >
            <div id={'hw2-name-' + props.affair._id} className={nameClass}>

                {props.affair.name}

            </div>
            <div id={'hw2-priority-' + props.affair._id} hidden>

                {props.affair.priority}

            </div>

            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                //ОНКЛИК={ФУНКЦИЯ}
                onClick={deleteCallback}
            >
                X
            </button>
        </div>
    )
}

export default Affair
