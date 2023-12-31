import { Button, Form, Input, Modal, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import {
  useCreateTouristMutation,
  useGetTouristByIdQuery,
  useUpdateTouristMutation,
} from "../../store/services/tourist";
import { useEffect, useState } from "react";
import { TouristForm } from "../../types";

interface Props {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;

  id?: string;
}

export default function TouristFormModal({ isModalOpen, handleOk, handleCancel, id }: Props) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);

  const [CreateTourist] = useCreateTouristMutation();
  const [UpdateTourist] = useUpdateTouristMutation();

  const handleCloseModal = () => {
    form.resetFields();
    handleCancel();
  };

  const { data, refetch } = useGetTouristByIdQuery(id);

  useEffect(() => {
    if (!id) return;
    refetch();
  }, [id, refetch]);

  useEffect(() => {
    if (!data) return;
    form.setFieldsValue({
      tourist_name: data.tourist_name,
      tourist_email: data.tourist_email,
      tourist_location: data.tourist_location,
    });
  }, [data, form]);

  const onFinish = async (values: TouristForm) => {
    setLoading(true);
    const TYPE = id ? "Update" : "Create";

    try {
      if (id) await UpdateTourist({ id, body: values as TouristForm });
      else await CreateTourist(values as TouristForm);

      messageApi.open({
        type: "success",
        content: `Success ${TYPE} Tourist!`,
      });

      handleCloseModal();
    } catch (error) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: `Failed ${TYPE} Tourist!`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal title="Form Tourist" centered open={isModalOpen} onOk={handleOk} onCancel={handleCloseModal} footer={[]}>
        <Form form={form} className="mt-5" layout="vertical" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item<TouristForm>
            name="tourist_name"
            label="Full Name"
            rules={[{ required: true, message: "Please input your Full Name!" }]}
          >
            <Input size="large" placeholder="Enter your Full Name" />
          </Form.Item>
          <Form.Item<TouristForm>
            name="tourist_email"
            label="Email Address"
            rules={[
              { required: true, message: "Please input your Email Address!" },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input size="large" placeholder="Enter your Email Address" />
          </Form.Item>
          <Form.Item<TouristForm>
            name="tourist_location"
            label="Location"
            rules={[{ required: true, message: "Please input your Location!" }]}
          >
            <TextArea rows={5} placeholder="Enter your Location" />
          </Form.Item>

          <Form.Item>
            <Button
              loading={loading}
              htmlType="submit"
              className="flex h-[44px] items-center justify-center opacity-90 hover:opacity-100 bg-[#6913D8] text-white hover:bg-[#F4F2FF] hover:text-[#6913D8] focus:bg-[#6913D8] focus:text-white rounded-full text-[16px] border-none mt-2 w-full !text-xs font-bold md:!h-[44px] md:!text-base"
            >
              {id ? "Update" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
