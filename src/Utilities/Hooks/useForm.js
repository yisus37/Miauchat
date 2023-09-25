import { useState,useRef } from "react";
export const useForm = (initialState) => {
    const [formValue, setFormValue] = useState(initialState);
    const [falta, setFalta] = useState([""]);
    const msgErrorRef = useRef([]);
	const regex = /[^\w\s]/g;
	//
	const getMensageError=(name)=>msgErrorRef.current.find(e=>e.name===name).msg??""

    const handleInputChange = ({ target }) => {
		if(falta.includes(target.name)){
			setFalta(falta.filter(e=>e!==target.name))
		}
		setFormValue({
			...formValue,
			[target.name]: target.value,
		});
	};

	//
	const handleInputChangeNotesp = ({ target }) => {
		if(falta.includes(target.name)){
			setFalta(falta.filter(e=>e!==target.name))
		}
		setFormValue({
			...formValue,
			[target.name]: target.value.replace(regex,""),
		});
			};
	//
	const handleInputChangeNotespacio = ({ target }) => {
		if(falta.includes(target.name)){
			setFalta(falta.filter(e=>e!==target.name))
		}
		setFormValue({
			...formValue,
			[target.name]: target.value.replace(" ","").replace(regex,""),
		});
			};


    	//
	const handleInputChangeNumber = ({ target }) => {
		if(falta.includes(target.name)){
			setFalta(falta.filter(e=>e!==target.name))
		}
		if(target.value === ''){
			setFormValue({
				...formValue,
				[target.name]: '',
			});
			return
		}
		setFormValue({
			...formValue,
			[target.name]: parseInt(target.value),
		});
	};

    const handleInputChangeDouble = ({ target }) => {
        if(falta.includes(target.name)){
            setFalta(falta.filter(e=>e!==target.name))
        }
        if(target.value === ''){
            setFormValue({
                ...formValue,
                [target.name]: '',
            });
            return
        }
            setFormValue({
                ...formValue,
                [target.name]: parseFloat(target.value),
            });

    };

    const isCompletedZod=(shema,form=formValue)=>{
		setFalta(falta.splice(0, falta.length))
		return shema.parseAsync(form)
		.then(r=>{
			return true
		})
		.catch(e=>{
		  const listError=JSON.parse(e)
		  var listnom=[]
		  msgErrorRef.current=[]
		  for (let i = 0; i < listError.length; i++) {

			  if(listError[i].path[1]!=undefined){
				 const name=listError[i].path[0]+"."+listError[i].path[1]
				  listnom.push(name)
				  msgErrorRef.current=[...msgErrorRef.current,{name,msg:listError[i].message}]
				  return
				}else{
					listnom.push(listError[i].path[0])
					msgErrorRef.current=[...msgErrorRef.current,{name:listError[i].path[0],msg:listError[i].message}]

				}
				
			}
		  setFalta(listnom)
		  return false
		})

	}

        return{
            isCompletedZod,handleInputChangeDouble,handleInputChangeNumber,handleInputChange,
            formValue,falta,setFormValue,getMensageError,setFalta,handleInputChangeNotesp,handleInputChangeNotespacio
        }

}