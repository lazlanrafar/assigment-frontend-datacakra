import { Avatar, Card } from "antd";
import LayoutApp from "../../layouts/app.layout";
import { useState } from "react";
import { useGetAllTouristQuery } from "../../store/services/tourist";
import { Tourist } from "../../types";
import { Link } from "react-router-dom";
import { ICAddress, ICDate } from "../../assets/icon";
import moment from "moment";

export default function HomePage() {
  const [page] = useState<number>(1);
  const { data } = useGetAllTouristQuery({ page });

  console.log(data);

  return (
    <LayoutApp>
      <div className="">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {data &&
            data.data.map((item: Tourist) => (
              <Link to={`/tourist/${item.id}`} key={item.id}>
                <Card className="shadow-sm hover:border-primary">
                  <div className="flex">
                    <Avatar src={item.tourist_profilepicture} size={50} />
                    <div className="ml-2">
                      <p className="font-bold">{item.tourist_name}</p>
                      <p className="text-xs text-gray-400">{item.tourist_email}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex">
                      <img src={ICAddress} alt="" />
                      <p className="ml-1 text-xs text-gray-600">{item.tourist_location}</p>
                    </div>
                    <div className="flex mt-1">
                      <img src={ICDate} alt="" />
                      <p className="ml-1 text-xs text-gray-600">{moment(item.createdat).format("ll")}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </LayoutApp>
  );
}
