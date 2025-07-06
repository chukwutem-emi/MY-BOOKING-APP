import React, { useEffect, useState } from "react"
import Shimmer from "../Utils/ShimmerUi";
import CombinedContainer from "./CombinedContainer";
const Browse = () => {
    const[isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="">
           {
            isLoading ? <Shimmer /> : <CombinedContainer />
           }
        </div>
    )
}
export default Browse;