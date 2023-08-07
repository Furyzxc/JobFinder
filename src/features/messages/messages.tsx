import s from "./messages.module.css";
import { useAppDispatch } from "@/shared/model/hooks.ts";
import { useLazyRequestMessagesQuery } from "@/slices/dialogs";
import { Message } from "@/entities/message";
import { Div } from "@/shared/ui/div/div.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { WithLoading } from "@/shared/hoc/withLoading.tsx";
import { WithError } from "@/shared/hoc/withError.tsx";

export const Messages = () => {
  const ref = useRef(null) as any;

  const dispatch = useAppDispatch();

  const { userId } = useParams();

  const id = Number(userId);

  const [requestMessages, { data, isFetching, isError }] =
    useLazyRequestMessagesQuery();

  useEffect(() => {
    if (id) requestMessages({ id });
  }, [dispatch, id, requestMessages]);

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, [data?.items]);

  return (
    <WithLoading isLoading={isFetching}>
      <WithError isError={isError}>
        <div className={s.flexbox}>
          {!data?.items[0] && <Div>Enter your first message</Div>}
          {data?.items.map((message) => (
            <Message
              {...message}
              key={message.id}
              me={message.senderId !== id}
            />
          ))}
          <div ref={ref} />
        </div>
      </WithError>
    </WithLoading>
  );
};
