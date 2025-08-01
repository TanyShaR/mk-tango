import { useSelector } from "react-redux";
import { Modal } from "../Modal/Modal";
import { selectModalShow } from "../../store/features/subscribe";

export function SubscribeModal() {
  const show = useSelector(selectModalShow);
  return <Modal show={show}>Спасибо за регистрацию!</Modal>;
}
