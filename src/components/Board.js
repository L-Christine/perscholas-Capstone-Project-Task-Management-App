import { useState, useEffect } from 'react'
import Column from './Column'
import { tempData } from './data/tempData'
import sortOrder from '../utilities/sortOrder'

export default function Board() {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    useEffect(()=>{
        const importData = tempData.boards.find(item => item.id ==='board-1')
        if(importData) {
            setBoard(importData)

            //sort columns
            importData.columns.sort((a,b) => importData.columnOrder.indexOf(a.id) - importData.columnOrder.indexOf(b.id))

            setColumns(sortOrder(importData.columns, importData.columnOrder, 'id'))
        }

        // if (importData.length === 0) {
        //     return (
        //         <div className='notFound'>Not Found</div>
        //     )
        // }
    }, [])

  return (
    <div className='board'>
        {columns && columns.length > 0 && columns.map((column, index) => {
            return (
                <Column key={column.id} column={column}/>
            )
        })}

    </div>
  )
}
