import { useDispatch, useSelector } from "react-redux"
import { FETCH_USER_URL } from "../../../Utils/constants";
import { useEffect } from "react";
import { addUserInfo } from "../../../Utils/getUserSlice";

const useGetUser = ({setResponseMsg, setErrorMsg, setLoading, setBackgroundLoading, setHasFetch}) => {
    const userToken = useSelector((store) => store.token?.accessToken);
    const dispatchUser = useDispatch()

    useEffect(() => {
        if (userToken) {
            handleGetUser();
        }
    }, [userToken]);

    const handleGetUser = async () => {
        setLoading(true);
        setBackgroundLoading(true)
        try {
            const data = await fetch(FETCH_USER_URL, {
                method:"GET",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                }
            });
            const json = await data.json();
            if (data.status === 200) {
                setResponseMsg(json.user);
                dispatchUser(addUserInfo(json.user))
                setHasFetch(true);
                setErrorMsg(false);
            }else {
                const [key] = Object.keys(json);
                setResponseMsg(json[key]);
                setErrorMsg(true);
            }

        } catch (error) {
            setResponseMsg(`Network error or server not responding. ${String(error)}`);
            setErrorMsg(true);
        }finally {
            setLoading(false);
            setBackgroundLoading(false);
        }
    };
    return handleGetUser;
};
export default useGetUser;