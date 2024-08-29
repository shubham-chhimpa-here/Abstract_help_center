import React, { useState } from 'react'

export const RequestForm = () => {
    const [formData, setFormData] = useState({
        title: "", description: "", link: ""
    })
    const handleChange = (e) => {
        setFormData((state) => ({ ...state, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        let headersList = {
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify(formData);

        let response = await fetch("/cards", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();

       e.target.reset()

    }
    return (
        <div id='form'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='title' name="title" id="" onChange={handleChange} required/>
                <input type="text" placeholder='description' name="description" id="" onChange={handleChange} required/>
                <input type="text" placeholder='link' name="link" id="" onChange={handleChange} required/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
