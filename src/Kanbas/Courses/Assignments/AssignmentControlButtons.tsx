import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from 'react-icons/fa';
import AssignmentDeleter from './AssignmentDeleter';
export default function AssignmentControlButtons({assignmentId, deleteAssignment}: {assignmentId: string, deleteAssignment: (assignmentId: string) => void}) {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaTrash className="text-danger mx-2 mb-1" data-bs-toggle="modal" data-bs-target={`#wd-delete-assignment-${assignmentId}-dialog`} />
      <IoEllipsisVertical className="fs-4" />
      <AssignmentDeleter assignmentId={assignmentId} deleteAssignment={deleteAssignment} />
    </div>
  );
}
