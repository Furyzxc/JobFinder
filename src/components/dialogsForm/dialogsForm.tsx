import { useAppDispatch } from "../../services/hooks.ts";
import { addMessage } from "../../features/dialogs";
import { Field, Form, Formik, FormikHelpers } from "formik";

interface FormValues {
    input: string
}

export const DialogsForm = () => {

    const dispatch = useAppDispatch()

    const initialValues: FormValues = {input: ''}

    const handleSubmit = ({input}: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        dispatch(addMessage({text: input}))
        resetForm()
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className='dialogsForm'>
                    <Field type="text" name='input' placeholder="Type your message here..." className='chatInput' autoComplete='off'/>
                    <button type='submit' className="button1" id="btn">
                        <span className='span right'>➤</span>
                        <span className="span left">Send</span>
                    </button>
                </Form>
        </Formik>
    )
}
