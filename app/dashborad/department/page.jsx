"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function page() {
  const [dept, setDept] = useState([])

  const getDepartment = async () => {
    await axios.get('http://localhost:8081/dept/getAll')
      .then(res => {
        console.log(res.data)
        setDept(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getDepartment()
  }, [])

  return (
    <>
      <div className="overflow-x-auto overflow-y-auto bg-gray-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>DeptNo</th>
              <th>DeptName</th>
              <th>Loc</th>
            </tr>
          </thead>
          <tbody>
            {
              dept.map((item, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{item.deptno ?? "-"}</td>
                  <td>{item.dname ?? "-"}</td>
                  <td>{item.loc ?? "-"}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
