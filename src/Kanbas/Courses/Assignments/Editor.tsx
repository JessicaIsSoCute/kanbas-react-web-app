import React from "react";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br /><br />
      <textarea id="wd-description">
        The assignment is available online
        Submit a link to the landing page of
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} /><br /><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="assignments">
                  ASSIGNMENTS</option>
              <option value="quizzes">
                  QUIZZES</option>
              <option value="exams">
                  EXAMS</option>
              <option value="project">
                  PROJECT</option>
            </select><br /><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="percentage">
                  Percentage</option>
            </select><br /><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value="online">
                  Online</option>
            </select><br /><br />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <label>Online Entry Options: </label><br/>
            <input type="checkbox" name="text-entry" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>
            <input type="checkbox" name="website-url" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>
            <input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
            <input type="checkbox" name="student-annotation" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
            <input type="checkbox" name="file-upload" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label><br/><br />
          </td>
        </tr>
        <tr>
          <td align="center" valign="top" colSpan={2}>
            <label htmlFor="wd-assign-to">Assign Assign to</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input id="wd-assign-to" value="Everyone" /><br /><br />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-due-date">Due</label><br />
            <input id="wd-due-date" type="date" value="2024-05-13" /><br /><br />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input id="wd-available-from" type="date" value="2024-05-06" />
                </td>
                <td>
                  <input id="wd-available-until" type="date" value="2024-05-20" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top" colSpan={2}><hr /></td>
        </tr>
        <tr>
          <td align="right" valign="top" colSpan={2}>
            <input type="button" value="Cancel" /> <input type="button" value="Save" />
          </td>
        </tr>
      </table>
    </div>
  );
}
