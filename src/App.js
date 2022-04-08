import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from './data/jsondata.json';

import './App.css';
import Table from "./components/Table";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log(jsonData.data.timelogs.nodes);
        setData(jsonData.data.timelogs.nodes);
    }, []);
    
    const columns = useMemo(
            () => [
            {
                // first group - TV Show
                Header: "Task Detail",
                // First group columns
                columns: [
                    {
                        Header: "Title",
                        accessor: "issue.title",
                        filter: 'fuzzyText',
                    },
                    {
                        Header: "Description",
                        accessor: "issue.description"
                    },
                    {
                        Header: 'TimeSpent',
                        accessor: 'timeSpent'
                    }
                ]
            },
            {
                // Second group - Details
                Header: "Author",
                // Second group columns
                columns: [
                    {
                        Header: "Name",
                        accessor: "issue.author.name"
                    },
                    {
                        Header: "Id",
                        accessor: "issue.author.id"
                    }
                ]
            },
            {
                // Second group - Details
                Header: "User",
                // Second group columns
                columns: [
                    {
                        Header: "Name",
                        accessor: "user.name"
                    },
                    {
                        Header: "Username",
                        accessor: "user.username"
                    }
                ]
            }
        ],
            []
            );
    return (
            <div className="App">
                <header className="App-header">
                    
                </header>
                <div className="content-wrapper">
                    <Table columns={columns} data={data} />
                </div>
            </div>
            );
}

export default App;
