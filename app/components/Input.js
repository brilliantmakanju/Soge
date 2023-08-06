import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({ style, placeholder }) {
    return (
        <input className={`px-4 outline-none focus:border-[2px] text-[#00204A] focus:border-[#00204A] ${style}`} placeholder={placeholder} />
    )
}