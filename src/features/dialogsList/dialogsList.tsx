import { Dialog } from "@/entities/dialog";
import s from "./dialogs.module.css";
import { useRequestDialogsQuery } from "@/slices/dialogs";
import { WithLoading } from "@/shared/hoc";

export const DialogsList = () => {
  const { isLoading, data } = useRequestDialogsQuery();

  return (
    <WithLoading isLoading={isLoading}>
      <div className={s.dialogs + " scroll height"}>
        {data?.map((dialog) => <Dialog key={dialog.id} {...dialog} />)}
      </div>
    </WithLoading>
  );
};
