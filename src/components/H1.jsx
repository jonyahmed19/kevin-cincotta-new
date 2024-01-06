import {useNavigate} from "react-router-dom";


export default function H1(props) {

    const navigate = useNavigate();

    return <h1 onClick={() => navigate(-1)}>{props?.children}</h1>
}
