import { useEffect, useState } from "react";
import { ITrainInfo } from "./interface";
import TrainInfoModal from "./components/TrainInfoModal";
import { ContentWrapper, Table, TableRow, Title } from "./styles";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { trainsSelector } from "../../store/selectors";
import { fetchTrainsAction } from "../../store/api-actions";

const Main = () => {
    const dispatch = useAppDispatch();
    const { trainsList, isLoading } = useSelector(trainsSelector);
    const [selectedTrain, setSelectedTrain] = useState<ITrainInfo | null>(null);
    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
        dispatch(fetchTrainsAction());
    }, [])

    useEffect(() => {
        isShowModal ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll';
    }, [isShowModal])

    return <>
        <Title>Поезда</Title>
        <ContentWrapper>
            {isLoading
                ? <div>Loading...</div>
                : <Table bgcolor="#efefef" rules="rows" cellSpacing={5} cellPadding={10}>
                    <tbody>
                        <tr>
                            <th>Наименование</th>
                            <th>Описание</th>
                        </tr>
                        {trainsList && trainsList.map((tarinInfo) =>
                            <TableRow key={tarinInfo.name} onClick={() => {
                                setSelectedTrain(tarinInfo);
                                setIsShowModal(true);
                            }}>
                                <td>{tarinInfo.name}</td>
                                <td>{tarinInfo.description}</td>
                            </TableRow>
                        )}
                    </tbody>
                </Table>
            }
        </ContentWrapper>

        {isShowModal && <TrainInfoModal info={selectedTrain} onClose={() => setIsShowModal(false)} />}
    </>
}

export default Main;