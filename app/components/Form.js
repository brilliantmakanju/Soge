'use client'
import React, { useRef } from 'react'

const Form = ({ action, style, ...props }) => {

    const formRef = useRef()

    async function handleAction(formData){
        await action(formData)
        formRef.current.reset()
    }

  return (
    <form {...props} ref={formRef} action={handleAction} className={style} ></form> 
  )
}

export default Form