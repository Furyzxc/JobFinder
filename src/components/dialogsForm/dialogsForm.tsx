import {useAppDispatch, useUserIdFromParams} from "../../app/hooks.ts";
import { Field, Form, Formik, FormikHelpers } from "formik";
import {sendMessage} from "../../features/dialogs/dialogs-thunks.ts";
import s from './dialogsForm.module.css'

interface FormValues {
    input: string
}


export const DialogsForm = () => {

    const dispatch = useAppDispatch()

    const userId = useUserIdFromParams()

    const initialValues: FormValues = {input: ''}

    const handleSubmit = ({input}: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        input && dispatch(sendMessage({userId, body: input}))
        resetForm()
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.dialogsForm}>
                    <Field type="text" name='input' placeholder="Type your message here..." className={s.input} autoComplete='off'/>
                    <button type='submit' className='materialBtn materialBtnPrvt'>
                        Send
                    </button>
                </Form>
        </Formik>
    )
}
