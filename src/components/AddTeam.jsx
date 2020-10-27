import React, { useEffect, useState } from 'react';
import ListItem from './ListItem'
import NewTaskInput from './NewTaskInput'

const AddTeam = () => {

    const [tasks, setTasks] = useState([]);

    function addNewTask(task) {
        const itensCopy = Array.from(tasks);
        itensCopy.push({ id: tasks.length, value: task });
        setTasks(itensCopy);
    }

    function updateTask({ target }, index) {
        const itensCopy = Array.from(tasks);
        itensCopy.splice(index, 1, { id: index, value: target.value });
        setTasks(itensCopy);
    }

    function deleteTask(index) {
        const itensCopy = Array.from(tasks);
        itensCopy.splice(index, 1);
        setTasks(itensCopy);
    }



    const useSortableData = (items, config = null) => {
        const [sortConfig, setSortConfig] = React.useState(config);

        const sortedItems = React.useMemo(() => {
            let sortableItems = [...items];
            if (sortConfig !== null) {
                sortableItems.sort((a, b) => {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                });
            }
            return sortableItems;
        }, [items, sortConfig]);

        const requestSort = (key) => {
            let direction = 'ascending';
            if (
                sortConfig &&
                sortConfig.key === key &&
                sortConfig.direction === 'ascending'
            ) {
                direction = 'descending';
            }
            setSortConfig({ key, direction });
        };

        return { items: sortedItems, requestSort, sortConfig };
    };

    const ProductTable = (props) => {
        const { items, requestSort, sortConfig } = useSortableData(props.products);
        const getClassNamesFor = (name) => {
            if (!sortConfig) {
                return;
            }
            return sortConfig.key === name ? sortConfig.direction : undefined;
        };


        return (

            <table>
                <thead>
                    <tr>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('name')}
                                className={getClassNamesFor('name')}
                            >
                                <img src="nameTeam.png" />
                            </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('description')}
                                className={getClassNamesFor('description')}
                            >
                                <img src="descriptionTeam.png" />
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (

        <div className="App">

            <NewTaskInput onSubmit={addNewTask} />
            <div className="tableMyTeam">


                <ProductTable
                    products={[
                        {
                            id: 1, name: <div className="App-header">

                                {tasks.map(({ id, value }, index) => (
                                    <ListItem
                                        key={id}
                                        value={value}
                                        onChange={(event) => updateTask(event, index)}
                                        onDelete={() => deleteTask(index)}
                                    />
                                ))}

                            </div>, description: <div className="App-headerDesc">
                                {tasks.map(({ id, value }, index) => (
                                    <ListItem
                                        key={id}
                                        value={value}
                                        onChange={(event) => updateTask(event, index)}
                                        onDelete={() => deleteTask(index)}
                                    />
                                ))}

                            </div>
                        },
                        { id: 2, name: "Barcelona", description: 'Barcelona Squad' },
                        { id: 3, name: "Real Madrid", description: 'Real Madrid Squad' },
                        { id: 4, name: 'Milan', description: 'Milan Squad' },
                        { id: 5, name: 'Liverpool', description: 'Liverpool Squad' },
                        { id: 6, name: 'Bayern Munich', description: 'Bayern Munich Squad' },
                        { id: 7, name: 'Lazio', description: 'Lazio Squad' },
                    ]}
                />
            </div>


        </div>
    );

    /*< div className="Array-preview" >
                <pre>
                    {JSON.stringify(tasks, null, 4)}
                </pre>
            </div > */


}


export default AddTeam;