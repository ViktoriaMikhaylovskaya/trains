import { useEffect, useState } from "react";
import { ITrainInfo } from "../../interface";
import { CloseButton, Content, Form, Input, SendDataButton, TableRow, TableTitle, Wrapper } from "./styles";
import { processErrorHandle } from "../../../../hooks/process-error-handle";
import { ERRORS } from "../../../../store/constants";

interface IProps { info: ITrainInfo | null, onClose: () => void };

interface ICharacteristic {
    [key: number]: {
        engineAmperage: 0,
        force: 0,
        speed: 0,
        isErrorSpeed?: boolean,
        isErrorForce?: boolean,
        isErrorAmperage?: boolean,
    }
}

const TrainInfoModal = ({ info, onClose }: IProps) => {
    const [newCharacteristics, setNewCharacteristics] = useState<ICharacteristic>({});
    const [isErrorInputValue, setIsErrorInputValue] = useState(false);

    const onClickSendData = () => {
        const speedList: number[] = [];
        Object.values(newCharacteristics).forEach((el) => speedList.push(el.speed));
        console.log(speedList.sort((a, b) => a - b));
    }

    const onChangeCharacteristicsValue = (e: any, i: number) => {
        const inputName = e.target.name;
        const value = e.target.value;

        if (inputName === 'engineAmperage') {
            let isErrorAmperage = false;
            if (!Number.isInteger(Number(value)) || value.includes('-')) {
                isErrorAmperage = true;
                processErrorHandle(ERRORS.INTEGER);
            } else {
                isErrorAmperage = false;
            }
            const newData = { ...newCharacteristics[i], [inputName]: Number(value), isErrorAmperage }
            setNewCharacteristics({ ...newCharacteristics, [i]: newData });

        } else if (inputName === 'force') {
            let isErrorForce = false;
            if (/^(0|[1-9]\d*)(\.[0-9]{1,2})?$/.test(value) || Number.isInteger(Number(value))) {
                isErrorForce = false;
            } else {
                processErrorHandle(ERRORS.INCORRECT_VALUE);
                isErrorForce = true;
            }

            const newData = { ...newCharacteristics[i], [inputName]: Number(value), isErrorForce }
            setNewCharacteristics({ ...newCharacteristics, [i]: newData });
        } else {
            let isErrorSpeed = false;
            if (!Number.isInteger(Number(value))) {
                processErrorHandle(ERRORS.INTEGER);
                isErrorSpeed = true;
            } else {
                isErrorSpeed = false;
            }
            const newData = { ...newCharacteristics[i], [inputName]: Number(value), isErrorSpeed }
            setNewCharacteristics({ ...newCharacteristics, [i]: newData });
        }
    }

    useEffect(() => {
        const newCharacteristics = info?.characteristics
            ? info?.characteristics.reduce((acc, el, i) => ({
                ...acc, [i]: { ...el, isErrorSpeed: false, isErrorForce: false, isErrorAmperage: false }
            }), {})
            : {};
        setNewCharacteristics(newCharacteristics);
    }, [info]);

    useEffect(() => {
        let res = 0;
        Object.values(newCharacteristics).forEach((el) => (el.isErrorSpeed || el.isErrorAmperage || el.isErrorForce) ? res += 1 : res);
        setIsErrorInputValue(res === 0 ? false : true);
    }, [newCharacteristics]);

    return <Wrapper>
        <Content>
            <CloseButton onClick={onClose}>Закрыть</CloseButton>
            <Form onSubmit={(e) => {
                e.preventDefault();
                onClickSendData();
                onClose();
            }}>
                <table bgcolor="#efefef" rules="rows" cellSpacing={5}>
                    <TableTitle>{info?.name} | Характеристики</TableTitle>
                    <tbody>
                        <tr>
                            <th>Ток двигателя</th>
                            <th>Сила тяги</th>
                            <th>Скорость</th>
                        </tr>
                        {Object.entries(newCharacteristics).map((el, i) =>
                            <TableRow key={i} onChange={(e) => onChangeCharacteristicsValue(e, i)}>
                                <td>
                                    <Input
                                        style={{ backgroundColor: el[1].isErrorAmperage ? '#ff4d4d' : '#dedede' }}
                                        name="engineAmperage" defaultValue={el[1].engineAmperage}
                                        type="number"
                                        required
                                        min={0}
                                    />
                                </td>
                                <td>
                                    <Input name='force' defaultValue={el[1].force} type="number" required={true} step={0.01}
                                        style={{ backgroundColor: el[1].isErrorForce ? '#ff4d4d' : '#dedede' }}
                                    />
                                </td>
                                <td>
                                    <Input name="speed" defaultValue={el[1].speed} type="number" required min={0}
                                        style={{ backgroundColor: el[1].isErrorSpeed ? '#ff4d4d' : '#dedede' }}
                                    />
                                </td>
                            </TableRow>
                        )}
                    </tbody>
                </table>
                <SendDataButton type="submit" disabled={isErrorInputValue}>
                    Отправить данные
                </SendDataButton>
            </Form>
        </Content>
    </Wrapper>
}

export default TrainInfoModal;
