export const tempData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'Todo 1',
                    taskOrder: ['task-1', 'task-2', 'task-3'],
                    tasks: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'task 1 title'
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'task 2 title'
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'task 3 title'
                        }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Todo 2',
                    taskOrder: ['task-4', 'task-5', 'task-6'],
                    tasks: [
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'task 4 title'
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'task 5 title'
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'task 6 title'
                        }
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Todo 3',
                    taskOrder: ['task-7', 'task-8', 'task-9'],
                    tasks: [
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'task 7 title'
                        },
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'task 8 title'
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'task 9 title'
                        }
                    ]
                }
            ]
        },
        
    ]
}
