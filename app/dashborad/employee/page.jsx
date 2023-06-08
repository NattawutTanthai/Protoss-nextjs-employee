"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function page() {
  const [employee, setEmployee] = useState([])

  const getEmployee = async () => {
    await axios.get('http://localhost:8081/emp/getAll')
      .then(res => {
        console.log(res.data)
        setEmployee(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getEmployee()
  }, [])

  return (
    <>
      <div className="overflow-x-auto overflow-y-auto bg-gray-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>empNO</th>
              <th>ename</th>
              <th>job</th>
              <th>mgr</th>
              <th>hiredate</th>
              <th>commission_pct</th>
              <th>deptno</th>
            </tr>
          </thead>
          <tbody>
            {
              employee.map((item, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <th>{item.empNo}</th>
                  <td>{item.ename}</td>
                  <td>{item.job}</td>
                  <td>{item.mgr ?? "-"}</td>
                  <td>{item.hiredate}</td>
                  <td>{item.commissionPct ?? "-"}</td>
                  <td>{item.deptno ?? "-"}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
