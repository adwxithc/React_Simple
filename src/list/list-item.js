import './list-item.css'
import Label from './label';

function ListItem(props){
    const {
        title,
        descr,
        isActive,
        onDelete,
        onAction
    }=props

    

    
    return(
    <div className='list-item'>
        <div className='list-head'>
            <span className='list_title'>
                {title}
            </span>
            <span className='delete' onClick={onDelete}> Delete</span>
        </div>
      
        <p className='list-description'>{descr}</p>
        <div className="list-options">

        <Label  isActive={isActive} onAction={onAction}/>


           
        </div>
      
       
    </div>
    )
}
export default ListItem