import React from "react";
export default function AssignmentDeleter({assignmentId, deleteAssignment}: {assignmentId: string, deleteAssignment: (assignmentId: string) => void}) {
  return (
    <div id={`wd-delete-assignment-${assignmentId}-dialog`} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Warning </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            Are you sure to delete assignment {assignmentId}?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel </button>
            <button onClick={() => deleteAssignment(assignmentId)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
              Delete it </button>
          </div>
        </div>
      </div>
    </div>
  );
}
