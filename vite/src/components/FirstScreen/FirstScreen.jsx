import { useDispatch } from "react-redux";
import S from "./FirstScreen.module.css";
import { showModal } from "../../store/features/subscribe";

export function FirstScreen() {
  const dispatch = useDispatch();

  const onSubscribe = () => {
    dispatch(showModal());
  };
  return (
    <main className={S.container}>
      <h2 className={S.title}>Запишитесь на первое пробное занятие</h2>
      <button className={S.button} onClick={onSubscribe}>
        Записаться
      </button>
    </main>
  );
}
