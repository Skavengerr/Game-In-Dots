import React, {useState, useEffect} from 'react'
import {Button, Select, MenuItem, InputLabel, FormControl, TextField} from '@material-ui/core'
import axios from 'axios'

export default function HeaderMenu({mode, name, changeMode, changeName}) {
    const [value, setValue] = useState('')
    const [settings, setSettings] = useState()

    useEffect(() => {
        const fetchLeaders = async () => {
            const result = await axios(
                'https://starnavi-frontend-test-task.herokuapp.com/game-settings',
            )
            setSettings(result.data)
        }
        fetchLeaders()
    }, [])

    const handleChangeMode = event => {
        changeMode(event.target.value)
    }
    const handleChangeName = event => {
        setValue(event.target.value)
    }

    const selectedItems = () => {
        let options = []
        if (settings !== undefined) {
            for (let key in settings) {
                options.push(
                    <MenuItem key={key} value={settings[key]}>
                        {key}
                    </MenuItem>,
                )
            }
        }
        return options
    }

    const onSubmit = () => {
        changeName(value)
    }

    return (
        <div className='m-auto flex justify-around p-12'>
            <FormControl variant='outlined' className='min-w-128 bg-blue-gray-100 rounded-12'>
                <InputLabel>Pick Game Mode</InputLabel>
                <Select
                    className='bg-blue-gray-100'
                    value={mode}
                    onChange={handleChangeMode}
                    label='Pick Game Mode'
                >
                    {selectedItems()}
                </Select>
            </FormControl>
            <TextField
                onChange={handleChangeName}
                variant='outlined'
                className='min-w-96 bg-gray-100'
                label='Enter Your Name'
                value={value}
            />
            <Button onClick={onSubmit} variant='outlined' className='min-w-80 bg-blue-gray-200'>
                Play
            </Button>
        </div>
    )
}
