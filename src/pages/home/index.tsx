import LayoutApp from "../../layouts/app.layout";
import { useState } from "react";
import { useGetAllTouristQuery } from "../../store/services/tourist";
import { Tourist } from "../../types";
import { CardTourist } from "../../components/molecules";

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
              <CardTourist
                key={item.id}
                id={item.id}
                tourist_name={item.tourist_name}
                tourist_profilepicture={item.tourist_profilepicture}
                tourist_email={item.tourist_email}
                tourist_location={item.tourist_location}
                createdat={item.createdat}
              />
            ))}
        </div>
      </div>
    </LayoutApp>
  );
}
