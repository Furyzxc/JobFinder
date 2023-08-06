import { useUserIdFromParams} from "@/shared/model/hooks.ts";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useSendMessageMutation } from "@/slices/dialogs";
import s from './dialogsForm.module.css'
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

interface FormValues {
    input: string
}


export const DialogsForm = () => {
    const { id } = useUserIdFromParams()

    const initialValues: FormValues = {input: ''}

    const [sendMessage, { isLoading }] = useSendMessageMutation()

    const handleSubmit = ({input}: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        input && sendMessage({userId: id, body: input})
        resetForm()
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.dialogsForm}>
                    <Field disabled={isLoading} type="text" name='input' placeholder="Type your message here..." className={s.input} autoComplete='off'/>
                    <Button sx={{maxWidth: '64px'}} variant="text" endIcon={<SendIcon />} type='submit'>
                        Send
                    </Button>
                </Form>
        </Formik>
    )
}
