import React, {useState, useEffect} from 'react'
import {Button, Select, MenuItem, InputLabel, FormControl, TextField} from '@material-ui/core'
import axios from 'axios'

export default function HeaderMenu() {
    const [value, setValue] = useState('')
    const [settings, setSettings] = useState()
    console.log("HeaderMenu -> settings", settings)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://starnavi-frontend-test-task.herokuapp.com/game-settings',
            )
            setSettings(result.data)
        }
        fetchData()
    }, [])

    const handleChange = event => {
        setValue(event.target.value)
    }
    return (
        <div className='m-auto flex justify-around p-12'>
            <FormControl variant='outlined' className='min-w-128 bg-blue-gray-100 rounded-12'>
                <InputLabel>Pick Game Mode</InputLabel>
                <Select
                    className='bg-blue-gray-100'
                    value={value}
                    onChange={handleChange}
                    label='Pick Game Mode'
                >
                    <MenuItem value={0}>1</MenuItem>
                </Select>
            </FormControl>
            <TextField
                variant='outlined'
                className='min-w-96 bg-gray-100'
                label='Enter Your Name'
                value=''
            />
            <Button variant='outlined' className='min-w-80 bg-blue-gray-200'>
                Play
            </Button>
        </div>
    )
}
