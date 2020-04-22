import React, {useState} from 'react'
import {Typography} from '@material-ui/core'
import moment from 'moment'
import axios from 'axios'
import clsx from 'clsx'

import useInterval from './hooks/useInterval'
import CustomizedSnackbars from './CustomizedSnackbars'

function Square(props) {
    return (
        <button
            className={clsx(
                'w-36 h-36 -m-1 border-gray border-1 outline-none cursor-default',
                props.color === 'blue'
                    ? 'bg-blue cursor-pointer'
                    : props.color === 'red'
                    ? 'bg-red'
                    : props.color === 'green'
                    ? 'bg-green'
                    : 'bg-white',
            )}
            disabled={props.color !== 'blue'}
            onClick={props.onClick}
        />
    )
}

const Field = ({mode, name, start, endGame, fetchLeaders}) => {
    const [date] = useState(String(moment(Date.now()).format('MMMM Do YYYY, h:mm:ss')))
    const [randomNumber, setRandomNumber] = useState()
    const [greenField, setGreenField] = useState([])
    const [clicked, setClicked] = useState(false)
    const [redField, setRedField] = useState([])
    const {field, delay} = mode
    const [snackBar, setSnackBar] = useState({winner: '', open: false})

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackBar({open: false})
    }

    const generateRandom = (min, max) => {
        let num = Math.floor(Math.random() * (max - min + 1)) + min
        return greenField.find(n => n === String(num)) || redField.find(n => n === String(num))
            ? generateRandom(min, max)
            : num
    }

    useInterval(() => {
        if (start) {
            setRandomNumber(generateRandom(0, field * field))
            if (clicked === true) {
                setGreenField([...greenField, String(randomNumber)])
                setClicked(false)
            } else if (clicked === false) {
                setRedField([...redField, String(randomNumber)])
            }
        }
        if (greenField.length >= (field * field) / 2) {
            setSnackBar({open: true, winner: 'user'})
            axios.post('https://starnavi-frontend-test-task.herokuapp.com/winners', {
                winner: name,
                date: date,
            })
            reset()
            fetchLeaders()
        } else if (redField.length >= (field * field) / 2) {
            setSnackBar({open: true, winner: 'Computer AI'})
            axios.post('https://starnavi-frontend-test-task.herokuapp.com/winners', {
                winner: 'AI',
                date: date,
            })
            reset()
            fetchLeaders()
        }
    }, delay)

    const renderSquare = (id, color) => {
        return <Square key={id} onClick={() => setClicked(true)} color={color} />
    }

    const renderedBlocks = (greenField, redField) => {
        let fields = mode.field
        let squares = []
        for (let i = 0; i < fields * fields; i++) {
            squares.push(i)
        }
        return (
            <div
                className={clsx(
                    fields === 5 ? 'max-w-160' : fields === 10 ? 'max-w-320' : 'max-w-480',
                    'm-auto',
                )}
            >
                {squares.map(row =>
                    randomNumber === row
                        ? renderSquare(row, 'blue')
                        : greenField.find(num => num === String(row))
                        ? renderSquare(row, 'green')
                        : redField.find(num => num === String(row))
                        ? renderSquare(row, 'red')
                        : renderSquare(row),
                )}
            </div>
        )
    }
    const reset = () => {
        fetchLeaders()
        setGreenField([])
        setRedField([])
        endGame()
    }

    return start ? (
        <div className='m-auto text-center p-12 mt-24'>
            <Typography className='text-18 m-auto text-gray-700 mb-12'>{name}</Typography>
            <div>{renderedBlocks(greenField, redField)}</div>
        </div>
    ) : (
        <div className='m-auto text-center p-12 mt-24'>
            <CustomizedSnackbars
                open={snackBar.open}
                handleClose={handleClose}
                winner={snackBar.winner}
            />
            <Typography className='text-18 m-auto text-gray-700 mb-12'>
                Choose mode and type your name
            </Typography>
        </div>
    )
}

export default Field
