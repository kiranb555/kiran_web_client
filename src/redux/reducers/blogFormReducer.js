import { handleActions } from 'redux-actions';
import { blogFormInputHandler,blogFormReset,blogFormSubmittedSuccessfully,blogFormLoader } from '../actions/blogActions';

const defaultState = {
    formData : {
        topic: "",
        blogPublishDate: "",
        title: "",
        imageType:"",
        shortdescription: "",
        readtimings: "",
        code:"<p>Enter your blog content in <b>HTML</b> format, so that it will be easier to render</p>"
    },
    formLoader: false,
    formSubmittedSuccessfully : false
}

const blogFormReducer = handleActions({
    [blogFormInputHandler]: (state,action) => ({
      ...state,
          formData: {
            ...state.formData,
            [action.payload.key]: action.payload.value,
          },
    }),
    [blogFormReset]: (state,action) => ({
          ...state,
          formData: {
            topic: "",
            blogPublishDate: "",
            title: "",
            imageType:"",
            shortdescription: "",
            readtimings: "",
            code:"<p>Enter your blog content in <b>HTML</b> format, so that it will be easier to render</p>"
        },
          formLoader: false
    }),
    [blogFormLoader]: (state, action) => ({
      ...state,
      formLoader: action.payload
    }),
    [blogFormSubmittedSuccessfully]: (state, action) => ({
      ...state,
      formSubmittedSuccessfully: action.payload
    }),
    },defaultState)
  
  export default blogFormReducer;