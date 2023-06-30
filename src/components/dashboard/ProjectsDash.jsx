import React, { useEffect, useState } from 'react'
import "./styles/ProjectsDash.css";
import {useTable, useRowSelect} from "react-table"
import projectsData from '../../utils/projects/Projects'
import Button from '../Button';
import {AddProjects} from "../../components"

const ProjectsDash = () => {

    // const [projects, setProjects] = useState()
    const [addClicked, setAddClciked] = useState(false)

    // useEffect(() => {
    //     console.log("useEffect triggered");
    //     setProjects(projectsData)
    // }, [])

    // console.log(projects)



    const data = React.useMemo(() => projectsData, [])
    const columns = React.useMemo(() => [
        {
            Header: "ID",
            accessor: 'no'
        },
        {
            Header: "Name",
            accessor: 'name'
        },
        {
            Header: "Description",
            accessor: 'description'
        },
        {
            Header: "Project Link",
            accessor: "projectlink"
        },
        {
            Header: "ImgUrl",
            accessor: 'imgurl'
        }
    ], [])

    const {
      getTableBodyProps,
      getTableProps,
      headerGroups,
      rows,
      prepareRow,
      state: { selectedRowIds },
    } = useTable({ columns, data }, useRowSelect, (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <input type='checkbox' {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <input type='checkbox' {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    });

    function handle() {
        const selectedRows = Object.keys(selectedRowIds).map((id) => rows.find((row) => row.id === id))
        console.log(selectedRows)
        const selectedProject = Object.keys(selectedRowIds).map((id) => projectsData.find((project) => project.id === parseInt(id),))
        console.log(selectedProject)
    }


  return (
    <div className="projects-dash-main">
      <div className="table-header-section">
        <h2>List of Projects</h2>
        {/* <button onClick={handle}>Clcik</button> */}
        <div className="col-2-table-hs">
          <Button text="Add Item" />
          <input placeholder="Search" />
        </div>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      { addClicked &&
        <div className='add-more-projects-pop-up'>
            <AddProjects />
        </div>
        }
        <div className='btn-container-main-display'>
            <Button text="Add Project" onClick={() => {
                setAddClciked(true)
            }}/>
        </div>
    </div>
  );
}

export default ProjectsDash