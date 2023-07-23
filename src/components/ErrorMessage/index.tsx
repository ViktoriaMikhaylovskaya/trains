import { useSelector } from "react-redux";
import { Error } from "./styles";
import { trainsSelector } from "../../store/selectors";

function ErrorMessage() {
    const { error } = useSelector(trainsSelector);

    return error
        ? <Error>{error}</Error>
        : null;
}

export default ErrorMessage;
