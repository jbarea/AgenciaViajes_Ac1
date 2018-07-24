import { addNotification, types } from "@utils/Notifications";

export function autoCopy(e){
    let text = e;
    if(e.target){
        e.preventDefault();
        text = e.currentTarget.innerText;
    }
    const inputAux = document.createElement('input');
    inputAux.style.opacity = 0 ;
    document.body.appendChild(inputAux);
    inputAux.setAttribute('value', text);
    inputAux.select();
    try{
      document.execCommand('copy');
      addNotification({type: types.info, message: 'Copiado al portapapeles'})
      inputAux.blur();
      document.body.removeChild(inputAux);
    }catch(err){
      throw err;
    }
}