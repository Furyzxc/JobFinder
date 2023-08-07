import s from "./message.module.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { clsx } from "clsx";
import { formatTime } from "@/shared/utils/formatTime.ts";
import { MessageResponseType } from "@/shared/types/api/dialogs-types.ts";

interface MessageProps extends MessageResponseType {
  me: boolean;
}

export const Message = ({ body, addedAt, me, viewed }: MessageProps) => {
  const time = formatTime(addedAt);

  return (
    <div className={clsx(s.message, me ? s.myMessage : s.friendMessage)}>
      <div className={s.text}>{body}</div>
      <div className={s.time}>{time}</div>
      <div className={s.tick}>
        <DoneAllIcon
          sx={{ fontSize: "12px", color: viewed ? "#66B7F6" : "white" }}
        />
      </div>
    </div>
  );
};
