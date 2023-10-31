import { Avatar, Card } from "antd";
import LayoutApp from "../../layouts/app.layout";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

export default function HomePage() {
  return (
    <LayoutApp>
      <div className="">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </div>
      </div>
    </LayoutApp>
  );
}
