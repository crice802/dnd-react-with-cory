import { useEffect, useState } from "react";

const ClassDetails = () => {

    const [classDetails, setClassDetails] = useState({})

    useEffect(() => {
        //this is where our api call will go
    },[])

    return ( 
    <>
    <div>
        <h3>Class Details</h3>
    </div>
    </> 
    );
}
 
export default ClassDetails;