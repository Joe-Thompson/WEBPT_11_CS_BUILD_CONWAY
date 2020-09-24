import React, {useCallback, useRef, useState} from 'react';
import { connect } from "react-redux";
import produce from "immer";
import neighborhood from '../images/research/neighborhood.png';
import game_of_life_logo from '../images/research/game_of_life.jpeg'

function Dashboard({ grid_state }) {
console.log(grid_state)
    let numRows = Number(grid_state.rows)
    let numCols = Number(grid_state.cols)

    const ops = [
        [0, 1],
        [0, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
        [-1, -1],
        [1, 0],
        [-1, 0]
    ]


    const empty_grid = () => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0));
        }
        console.log(rows)
        return rows
    }

    const random_grid = () => {
        const rows = [];
            for (let i = 0; i < numRows; i++) {
                rows.push(Array.from(Array(numCols), () => Math.random() > .7 ? 1 : 0));
            }
        return rows
    }

    const [running, setRunning] = useState(false);
    const [grid, setGrid] = useState(() => {
        if (grid_state.preset_grid === true) {
            return grid_state.preset_grid_data
        }
        if (!grid_state.random_grid) {
            return empty_grid()
        } else {
            return random_grid()
        }
    })

    const runningRef = useRef(running);
    runningRef.current = running;

    const runGame = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
        setGrid(current_grid => {
            return produce(current_grid, gridCopy => {
                console.log('this is line 78 in dashboard')
                console.log(current_grid)
                for (let i = 0; i < numRows; i++) {
                    for (let k = 0; k < numCols; k++) {
                        let neighbors = 0;
                        ops.forEach(([x, y]) => {
                            const newI = i + x;
                            const newK = k + y;
                            if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                                neighbors += current_grid[newI][newK]
                            }
                        })
                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][k] = 0;
                        } else if (current_grid[i][k] === 0 && neighbors === 3) {
                            gridCopy[i][k] = 1;
                        }
                }}
            })
        })
        setTimeout(runGame, 300)
    },[numCols, numRows, ops])
console.log('this is the current state of the app from line 63 in dashboard')
console.log(grid_state)
    return (
        <>
            <div className='dashboard_container'>
                <div className='grid_container' style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${numCols}, 18px)`
                }}>
                    {grid.map((rows, i) =>
                        rows.map((col, k) => (
                            <div
                                className='grid_cell'
                                key={`${i} - ${k}`}
                                onClick={() => {
                                    const newGrid = produce(grid, gridCopy => {
                                        gridCopy[i][k] = grid[i][k] ? 0 : 1;
                                    });
                                    setGrid(newGrid)
                                }}
                                style={{
                                backgroundColor: grid[i][k] ? grid_state.accent_color : grid_state.bg_color,
                                border: "solid .5px black"
                            }}
                            />
                        ))
                    )}
                </div>
                <div className='rules_container'>
                    <h3 className='rules_title'>How to Play...</h3>
                    <img src={game_of_life_logo} alt='logo' className='rules_logo_photo' />
                    <p className='rule_one'>Any live cell with fewer than two live neighbours dies, as if by underpopulation</p>
                    <p className='rule_two'>Any live cell with two or three live neighbours lives on to the next generation</p>
                    <p className='rule_three'>Any live cell with more than three live neighbours dies, as if by overpopulation</p>
                    <p className='rule_four'>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction</p>
                    <img className='rule_photo' src={neighborhood} alt='neighborhood' />
                    <br/>
                    <small className='rule_photo_text'>Cellular Neighborhood</small>
                </div>
            </div>

            <div className='btn_container'>
                <button
                    className='grid_controls'
                    onClick={() => {
                        setRunning(!running)
                        if (!running) {
                            runningRef.current = true
                            runGame()
                        }
                    }}
                >
                    {running ? <ion-icon name="close-circle-outline">"."</ion-icon> : <ion-icon name="caret-forward-circle-outline">"."</ion-icon>}
                </button>
                    <button
                        className='grid_controls'
                        onClick={() => {
                        const rows = [];
                        for (let i = 0; i < numRows; i++) {
                            rows.push(Array.from(Array(numCols), () => Math.random() > .7 ? 1 : 0));
                        }
                        setGrid(rows)
                    }}>
                        <ion-icon name="help-circle-outline">"."</ion-icon>
                    </button>
                    <button
                        className='grid_controls'
                        onClick={() => setGrid(empty_grid)}>
                        <ion-icon name="reload-circle-outline">"."</ion-icon>
                    </button>
                <div className='btn_labels'>
                    <p className='btn_label_text'>Start / Stop</p>
                    <p className='btn_label_text'>Random</p>
                    <p className='btn_label_text'>Clear</p>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {

};

function mapStateToProps(state) {
    return {
        grid_state: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)