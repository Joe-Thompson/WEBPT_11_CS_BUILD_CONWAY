import React, {useCallback, useRef, useState} from 'react';
import produce from "immer";

function Dashboard() {

    const numRows = 50;
    const numCols = 50;
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
        return rows
    }

    const [running, setRunning] = useState(false);
    const [grid, setGrid] = useState(() => {
        return empty_grid()
    })

    const runningRef = useRef(running);
    runningRef.current = running;

    const runGame = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
        setGrid(current_grid => {
            return produce(current_grid, gridCopy => {
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
        setTimeout(runGame, 100)
    },[])

    return (
        <>
        <button
            onClick={() => {
                setRunning(!running)
                if (!running) {
                    runningRef.current = true
                    runGame()
                }
            }}
        >
            {running ? "stop" : "start"}
        </button>
            <button onClick={() => {
                const rows = [];
                for (let i = 0; i < numRows; i++) {
                    rows.push(Array.from(Array(numCols), () => Math.random() > .7 ? 1 : 0));
                }
                setGrid(rows)
            }}>
                random
            </button>
            <button onClick={() => setGrid(empty_grid)}>
                clear
            </button>
            <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${numCols}, 20px)`
            }}>
                {grid.map((rows, i) =>
                    rows.map((col, k) => (
                        <div
                            key={`${i} - ${k}`}
                            onClick={() => {
                                const newGrid = produce(grid, gridCopy => {
                                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                                });
                                setGrid(newGrid)
                            }}
                            style={{
                            width: 20,
                            height: 20,
                            backgroundColor: grid[i][k] ? "blue" : undefined,
                            border: "solid 1px black"
                        }}
                        />
                    ))
                )}
            </div>
        </>
    )
}

export default Dashboard