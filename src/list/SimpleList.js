import ListItem from './list-item.js'
function SimpleList(props){
    const {
        data,
        onAction,
        onLabelClick
    }=props
    return(
        <div className='app-list'>
            
        {
          data.map(item=><ListItem 
               title={item.title} 
               descr={item.descr} 
               isActive={item.isActive} 
               key={item.title} 
               onAction={onLabelClick}
               onDelete={()=>{
                onAction(item);
               }}
               />)
        }
        
        </div>
    )
}
export default SimpleList