import Createlement from "./fucntask"
import { Component } from "react"

class Article extends Component
{
    render(){
        return(
            <div className="ms-4">
                <div className="fs-2">Web development </div>
                <Createlement />
            </div>
        )
    }
}
export default Article
