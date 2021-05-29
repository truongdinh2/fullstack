import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostA, updatePostA } from '../action';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const FormPage = ({ idCurrent, setIdCurrent }) => {
    const [form] = useForm()
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        if (!idCurrent) {
            dispatch(createPostA(values))
        } else {
            dispatch(updatePostA(idCurrent, values))
            setIdCurrent(null)
        }
        form.resetFields()
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const stateUpdate = useSelector(state => idCurrent ? state.post.find((msg) => msg._id === idCurrent) : null)
    useEffect(() => {
        if (stateUpdate) {
            form.setFieldsValue({ title: stateUpdate.title })
            console.log(stateUpdate)
        }
    }, [form, stateUpdate])
    return (
        <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            form={form}
        >
            <Form.Item
                label="Username"
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
export default FormPage;