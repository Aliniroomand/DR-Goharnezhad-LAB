import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const notify = (text,type)=>{
if (type === "success"){
    toast.success((text), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
        });
        
} else {
    toast.error((text), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
        });
}
}
