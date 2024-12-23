const initialState = {
    students: [],
    loading: false,
    error: null,
  };
  
  // Action types
  const SET_STUDENTS = 'SET_STUDENTS';
  const ADD_STUDENT = 'ADD_STUDENT';
  const SET_LOADING = 'SET_LOADING';
  const SET_ERROR = 'SET_ERROR';
  
  // Action creators
  export const setStudents = (students) => ({ type: SET_STUDENTS, payload: students });
  export const addStudent = (student) => ({ type: ADD_STUDENT, payload: student });
  export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
  export const setError = (error) => ({ type: SET_ERROR, payload: error });
  
  // Reducer
  export const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_STUDENTS:
        return { ...state, students: action.payload };
      case ADD_STUDENT:
        return { ...state, students: [...state.students, action.payload] };
      case SET_LOADING:
        return { ...state, loading: action.payload };
      case SET_ERROR:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  