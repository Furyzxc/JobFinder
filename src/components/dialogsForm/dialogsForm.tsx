import {useAppDispatch, useUserIdFromParams} from "../../app/hooks.ts";
import { Field, Form, Formik, FormikHelpers } from "formik";
import {sendMessage} from "../../features/dialogs/dialogs-thunks.ts";
import s from './dialogsForm.module.css'
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

interface FormValues {
    input: string
}


export const DialogsForm = () => {

    const dispatch = useAppDispatch()

    const { id } = useUserIdFromParams()

    const initialValues: FormValues = {input: ''}

    const handleSubmit = ({input}: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        input && dispatch(sendMessage({userId: id, body: input}))
        resetForm()
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.dialogsForm}>
                    <Field type="text" name='input' placeholder="Type your message here..." className={s.input} autoComplete='off'/>
                    <Button variant="text" endIcon={<SendIcon />} type='submit'>
                        Send
                    </Button>
                </Form>
        </Formik>
    )
}
