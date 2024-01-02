import ListServices from "./ListServices";
import FormPropsTextFields from '../Admin/FormPropsTextFields'
function Client(){
    // const enterElement = document.querySelector("#enter");
    // enterElement.style.display = "none";



    return(
        <>
        <FormPropsTextFields/>
        <ListServices />
        </>
    )
}
export default Client;