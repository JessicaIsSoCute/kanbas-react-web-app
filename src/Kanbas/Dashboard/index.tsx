import React from "react";
export default function Dashboard() {
  return (
    <div>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/course_html.png" alt="" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}
                  href="#/Kanbas/Courses/Home">
                  <h5 className="card-title">CS1111 HTML</h5>
                </a>
                <h6 className="wd-dashboard-course-title card-subtitle my-2 text-body-secondary">
                  HTML developer
                </h6>
                <p className="card-text text-body-tertiary">Spring 2024 Semester Full Term Grad</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px"}}>
            <div className="card">
              <img src="/images/course_javascript.png" alt="" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}
                  href="#/Kanbas/Courses/Home">
                  <h5 className="card-title">CS1112 Javascript</h5>
                </a>
                <h6 className="wd-dashboard-course-title card-subtitle my-2 text-body-secondary">
                  Javascript developer
                </h6>
                <p className="card-text text-body-tertiary">Spring 2024 Semester Full Term Grad</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px"}}>
            <div className="card">
              <img src="/images/course_css.png" alt="" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}
                  href="#/Kanbas/Courses/Home">
                  <h5 className="card-title">CS1113 CSS</h5>
                </a>
                <h6 className="wd-dashboard-course-title card-subtitle my-2 text-body-secondary">
                  CSS developer
                </h6>
                <p className="card-text text-body-tertiary">Spring 2024 Semester Full Term Grad</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px"}}>
            <div className="card">
              <img src="/images/course_java.png" alt="" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}
                  href="#/Kanbas/Courses/Home">
                  <h5 className="card-title">CS1114 JAVA</h5>
                </a>
                <h6 className="wd-dashboard-course-title card-subtitle my-2 text-body-secondary">
                  JAVA developer
                </h6>
                <p className="card-text text-body-tertiary">Spring 2024 Semester Full Term Grad</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px"}}>
            <div className="card">
              <img src="/images/course_chinese.png" alt="" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}
                  href="#/Kanbas/Courses/Home">
                  <h5 className="card-title">CS1115 Chinese</h5>
                </a>
                <h6 className="wd-dashboard-course-title card-subtitle my-2 text-body-secondary">
                  Chinese speaker
                </h6>
                <p className="card-text text-body-tertiary">Spring 2024 Semester Full Term Grad</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px"}}>
            <div className="card">
              <img src="/images/course_english.png" alt="" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}
                  href="#/Kanbas/Courses/Home">
                  <h5 className="card-title">CS1116 English</h5>
                </a>
                <h6 className="wd-dashboard-course-title card-subtitle my-2 text-body-secondary">
                  English speaker
                </h6>
                <p className="card-text text-body-tertiary">Spring 2024 Semester Full Term Grad</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px"}}>
            <div className="card">
              <img src="/images/course_spanish.png" alt="" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}
                  href="#/Kanbas/Courses/Home">
                  <h5 className="card-title">CS1117 Spanish</h5>
                </a>
                <h6 className="wd-dashboard-course-title card-subtitle my-2 text-body-secondary">
                  Spanish speaker
                </h6>
                <p className="card-text text-body-tertiary">Spring 2024 Semester Full Term Grad</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px"}}>
            <div className="card">
              <img src="/images/course_french.png" alt="" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}
                  href="#/Kanbas/Courses/Home">
                  <h5 className="card-title">CS1118 French</h5>
                </a>
                <h6 className="wd-dashboard-course-title card-subtitle my-2 text-body-secondary">
                  French speaker
                </h6>
                <p className="card-text text-body-tertiary">Spring 2024 Semester Full Term Grad</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px"}}>
            <div className="card">
              <img src="/images/course_japanese.png" alt="" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}
                  href="#/Kanbas/Courses/Home">
                  <h5 className="card-title">CS1119 Japanese</h5>
                </a>
                <h6 className="wd-dashboard-course-title card-subtitle my-2 text-body-secondary">
                  Japanese speaker
                </h6>
                <p className="card-text text-body-tertiary">Spring 2024 Semester Full Term Grad</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px"}}>
            <div className="card">
              <img src="/images/course_russian.png" alt="" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}
                  href="#/Kanbas/Courses/Home">
                  <h5 className="card-title">CS1120 Russian</h5>
                </a>
                <h6 className="wd-dashboard-course-title card-subtitle my-2 text-body-secondary">
                  Russian speaker
                </h6>
                <p className="card-text text-body-tertiary">Spring 2024 Semester Full Term Grad</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
