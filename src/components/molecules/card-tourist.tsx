import { Avatar, Card } from "antd";
import { Link } from "react-router-dom";
import { ICAddress, ICDate } from "../../assets/icon";
import moment from "moment";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface Props {
  id: string;
  tourist_profilepicture: string;
  tourist_name: string;
  tourist_email: string;
  tourist_location: string;
  createdat: string;
}

export default function CardTourist(props: Props) {
  return (
    <Card
      className="shadow-sm hover:border-primary"
      actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
    >
      <Link to={`/tourist/${props.id}`} key={props.id}>
        <div className="flex">
          <Avatar src={props.tourist_profilepicture} size={50} />
          <div className="ml-2">
            <p className="font-bold ">{props.tourist_name}</p>
            <p className="text-xs text-gray-400">{props.tourist_email}</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex">
            <img src={ICAddress} alt="" />
            <p className="ml-1 text-xs text-gray-600">{props.tourist_location}</p>
          </div>
          <div className="flex mt-1">
            <img src={ICDate} alt="" />
            <p className="ml-1 text-xs text-gray-600">{moment(props.createdat).format("ll")}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
}
