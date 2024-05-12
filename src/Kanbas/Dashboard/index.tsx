import React from "react";
export default function Dashboard() {
  return (
    <div>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/course_html.png" alt="" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1111 HTML
            </a>
            <p className="wd-dashboard-course-title">
              HTML developer
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course_javascript.png" alt="" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1112 Javascript
            </a>
            <p className="wd-dashboard-course-title">
              Javascript developer
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course_css.png" alt="" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1113 CSS
            </a>
            <p className="wd-dashboard-course-title">
              CSS developer
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course_java.png" alt="" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1114 JAVA
            </a>
            <p className="wd-dashboard-course-title">
              JAVA developer
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course_chinese.png" alt="" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1115 Chinese
            </a>
            <p className="wd-dashboard-course-title">
              Chinese speaker
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course_english.png" alt="" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1116 English
            </a>
            <p className="wd-dashboard-course-title">
              English speaker
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course_spanish.png" alt="" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1117 Spanish
            </a>
            <p className="wd-dashboard-course-title">
              Spanish speaker
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course_french.png" alt="" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1118 French
            </a>
            <p className="wd-dashboard-course-title">
              French speaker
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course_japanese.png" alt="" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1119 Japanese
            </a>
            <p className="wd-dashboard-course-title">
              Japanese speaker
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/course_russian.png" alt="" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home">
              CS1120 Russian
            </a>
            <p className="wd-dashboard-course-title">
              Russian speaker
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
