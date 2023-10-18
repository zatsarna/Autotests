import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {green} from '@mui/material/colors';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider

            sx={{ // стили для слайдера // пишет студент
                color: '#20b634',
                width: '1000px',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '2px solid #16a429',
                    width: '30px',
                    height: '30px'
                },
                '& .MuiSlider-thumb::before': {
                    content: '""',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#20b634',
                    boxShadow: 'none',
            },
                '& .MuiSlider-rail': {
                    opacity: 0.5,
                    backgroundColor: '#5e5c5c',
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
