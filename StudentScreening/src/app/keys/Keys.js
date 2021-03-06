const Keys = {
  API: {
    END_POINTS: {
      QUESTION: "http://localhost:4000/question",
      QUESTION_ACTIVE_DEACTIVE: "http://localhost:4000/question/status",
      QUESTION_SAVE: "http://localhost:4000/question",
      ADMIN_STAFF: "http://localhost:4000/staff",
      ADMIN_STAFF_ACTIVE_DEACTIVE: "http://localhost:4000/staff/status",
      ADMISSION_STAFF: "http://localhost:4000/students",
      EXAM_SAVE: "http://localhost:4000/students/",
      EXAM_FINISHED: "http://localhost:4000/students/finished",
      GET_EXAM: "http://localhost:4000/students/exam/",
      WRITE_EXAM: "http://localhost:4000/students/exam/",
      UPDATE_STATUS: "http://localhost:4000/students/status"
    },
    HEADER: {
      X_AUTH_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzU4NmQ1NDc1ZWY5NTEzNmM5NDdjMGQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWludXNlckBnbWFpbC5jb20iLCJpYXQiOjE1NDkzMDcwNDd9._5anBxUdha_CLh1DPh1JhBtnTwsN7CchkRXhjwwWAjs"
    }
  }
};

module.exports = Keys;
