import backend from '../images/Blog/backend.png';
import frontend from '../images/Blog/frontend.png';
import browser from '../images/Blog/browser.png';
import coding from '../images/Blog/coding.png';
import react from '../images/Blog/react.png';
import performance from '../images/Blog/performance.png';

const getSrc = (thumbnail) => {
        switch(thumbnail){
          case "frontend":
            return frontend;
          case "backend":
            return backend;
          case "coding":
            return coding;
          case "performance":
            return performance;
          case "browser":
            return browser;
          case  "react":
            return react;
          default: 
            return "frontend";
        }
}

export default getSrc;