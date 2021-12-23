import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj,index,deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);


    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    const onCheckTask = (taskName) => {
        if (localStorage.getItem(taskName) == null || localStorage.getItem(taskName) == "false") {
            localStorage.setItem(taskName, "true")
        } else if (localStorage.getItem(taskName) == "true"){
            localStorage.setItem(taskName, "false")
        }
        window.location.reload();
    }




    return (
        <div class="card-wrapper m-3">
            <div class="card-top" style={{"background-color": colors[index % 5].primaryColor}}></div>
            <div class="task-holder">
                <span class="card-header" style={{
                    "background-color": colors[index % 5].secondaryColor,
                    "border-radius": "10px"
                }}>{taskObj.Name}

               </span>

                <p class="mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
                        <i className="far fa-edit "
        style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}}
        onClick={() => setModal(true)}/>
                        <i className="fas fa-trash-alt m-3"
        style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}}
        onClick={handleDelete}/>
                    {/*<div  className="form-check">*/}
                        <label htmlFor="" className="form-check-label mt-1">
                            {localStorage.getItem(taskObj.Name) == "true" ?
                                <input className="checkbox" type="checkbox"
                                       checked={true}
                                       onChange={ e=> onCheckTask(taskObj.Name)}
                                /> :
                                <input className="checkbox" type="checkbox"
                                       checked={false}
                                       onChange={ e=> onCheckTask(taskObj.Name)}
                                />
                            }  <i className="input-helper"></i>
                        </label>
                    {/*</div>*/}



                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
        </div>
    );
};export default Card;

