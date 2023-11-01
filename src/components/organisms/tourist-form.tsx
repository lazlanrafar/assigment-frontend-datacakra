import { Button, Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";

interface Props {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export default function TouristForm({ isModalOpen, handleOk, handleCancel }: Props) {
  type FieldType = {
    tourist_name?: string;
    tourist_email?: string;
    tourist_location?: string;
  };

  const onFinish = async (values: FieldType) => {
    console.log(values);
  };

  return (
    <Modal title="Form Tourist" centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
      <Form className="mt-5" layout="vertical" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item<FieldType>
          name="tourist_name"
          label="Full Name"
          rules={[{ required: true, message: "Please input your Full Name!" }]}
        >
          <Input size="large" placeholder="Enter your Full Name" />
        </Form.Item>
        <Form.Item<FieldType>
          name="tourist_email"
          label="Email Address"
          rules={[{ required: true, message: "Please input your Email Address!" }]}
        >
          <Input size="large" placeholder="Enter your Email Address" />
        </Form.Item>
        <Form.Item<FieldType>
          name="tourist_location"
          label="Location"
          rules={[{ required: true, message: "Please input your Location!" }]}
        >
          <TextArea rows={5} placeholder="Enter your Location" />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            className="flex h-[44px] items-center justify-center opacity-90 hover:opacity-100 bg-[#6913D8] text-white hover:bg-[#F4F2FF] hover:text-[#6913D8] focus:bg-[#6913D8] focus:text-white rounded-full text-[16px] border-none mt-2 w-full !text-xs font-bold md:!h-[44px] md:!text-base"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
