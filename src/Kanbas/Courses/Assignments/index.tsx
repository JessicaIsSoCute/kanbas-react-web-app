import React from "react";
import { BsGripVertical } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentsControls />
        <ul id="wd-assignments" className="list-group rounded-0 my-2">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="fs-4" />
            <IoMdArrowDropdown className="mx-2" />
            <b>ASSIGNMENTS</b>
            <IoEllipsisVertical className="float-end mt-1"/>
            <FaPlus className="float-end text-secondary mx-2 mt-1" />
            <span className="badge rounded-pill float-end text-dark border border-secondary">40% of Total</span>
          </div>
          <ul id="wd-assignment-list" className="list-group rounded-0">
            <li className="wd-assignment-list-item list-group-item p-3" style={{borderLeft: "5px solid green"}}>
              <div className="row align-items-center">
                <div className="col-1">
                  <BsGripVertical className="fs-4" />
                </div>
                <div className="col-1">
                  <FaRegEdit className="text-success" />
                </div>
                <div className="col">
                  <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                    <h5><b>A1</b></h5>
                  </a>
                  <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</p>
                </div>
                <div className="col float-end">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3" style={{borderLeft: "5px solid green"}}>
              <div className="row align-items-center">
                <div className="col-1">
                  <BsGripVertical className="fs-4" />
                </div>
                <div className="col-1">
                  <FaRegEdit className="text-success" />
                </div>
                <div className="col">
                  <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                    <h5><b>A2</b></h5>
                  </a>
                  <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</p>
                </div>
                <div className="col float-end">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3" style={{borderLeft: "5px solid green"}}>
              <div className="row align-items-center">
                <div className="col-1">
                  <BsGripVertical className="fs-4" />
                </div>
                <div className="col-1">
                  <FaRegEdit className="text-success" />
                </div>
                <div className="col">
                  <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                    <h5><b>A3</b></h5>
                  </a>
                  <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</p>
                </div>
                <div className="col float-end">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
          </ul>
        </ul>
      </div>
  );
}
