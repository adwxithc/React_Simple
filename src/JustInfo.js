import React,{memo} from "react"

function JustInfo(props){
    console.log('JustInfo called')
    props.val()
    return(
        <div>
            Just info {}
        </div>
    )
}

export default memo(JustInfo)