import { setStatus } from "../../features/profile";
import { useAppDispatch } from "../../services/hooks.ts";
import { Field, Form, Formik } from "formik";

interface StatusProps {
    statusText: string | null
}

interface FormValues {
    status: string
}

export const Status = (props: StatusProps) => {
    const dispatch = useAppDispatch()
    const initialValues = { status: props.statusText || '' }


    const handleSubmit = ({status}: FormValues) => dispatch(setStatus(status))

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
            <Form className='form__group'>
                <Field className='form__field' name="status" placeholder='Write your status...' onBlur={handleSubmit}
                      autoComplete='off' />
                <label htmlFor='status' className='form__label'>Status</label>
            </Form>
        </Formik>
    )
};
