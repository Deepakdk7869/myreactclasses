import Child from "./child"
function Createlement(){
    let name = 'Deepak' , name1 = 'Akash', name2 = "Pratap";
    let age = 20 , age1 = 27 , age2 = 34;

    return (
        <div>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <Child na = {name} age = {age}/>
            <Child na = {name1} age = {age1}/>
            <Child na = {name2} age = {age2}/>
        </div>
    )
}
export default Createlement 