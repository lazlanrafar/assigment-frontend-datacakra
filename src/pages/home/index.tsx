import LayoutApp from "../../layouts/app.layout";
import { useEffect, useState } from "react";
import { useDeleteTouristMutation, useGetAllTouristQuery } from "../../store/services/tourist";
import { Tourist } from "../../types";
import { CardTourist } from "../../components/molecules";
import { Pagination, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TouristFormModal from "../../components/organisms/tourist-form";
import Swal from "sweetalert2";

export default function HomePage() {
  const [messageApi, contextHolder] = message.useMessage();

  const [page, setPage] = useState<number>(1);
  const { data, refetch, isLoading, isFetching } = useGetAllTouristQuery({ page });

  const [modal, setModal] = useState<boolean>(false);
  const [idUpdate, setIdUpdate] = useState<string | undefined>(undefined);

  const [DeleteTourist] = useDeleteTouristMutation();

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setIdUpdate(undefined);
    setModal(false);
  };

  const handleTouristEdit = (id: string) => {
    setIdUpdate(id);
    handleOpenModal();
  };

  const handleTouristDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete this tourist!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
      confirmButtonColor: "#782add",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await DeleteTourist(id).then(() => {
          messageApi.open({
            type: "success",
            content: `Success Delete tourist!`,
          });
        });
      }
    });
  };

  return (
    <LayoutApp>
      {contextHolder}
      <TouristFormModal id={idUpdate} isModalOpen={modal} handleOk={handleOpenModal} handleCancel={handleCloseModal} />

      <div className="">
        <h1 className="relative mx-auto text-center text-xl font-bold leading-[130%] text-black md:text-[32px] mb-10">
          <span className="relative">
            <svg
              width="46"
              height="47"
              viewBox="0 0 46 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 ml-[-30px] mt-[-16px] h-[30px] w-[30px] md:-left-4 md:-top-2 md:ml-[-27px] md:h-[46px] md:w-[46px]"
            >
              <path
                d="M40.914 17.3247C41.5376 17.5348 42.1353 17.7192 42.6857 17.8785C42.1356 18.0379 41.5382 18.2223 40.9149 18.4324C38.2584 19.3279 34.9942 20.7341 32.9811 22.7489C30.9679 24.7637 29.5645 28.0291 28.6712 30.6864C28.4616 31.3099 28.2777 31.9074 28.1188 32.4576C27.959 31.9074 27.7741 31.3099 27.5635 30.6864C26.6657 28.0291 25.2568 24.7637 23.2403 22.7489C21.2237 20.7341 17.9572 19.3279 15.2991 18.4324C14.532 18.1739 13.8042 17.9544 13.1554 17.7725C13.7795 17.5571 14.4799 17.3066 15.2208 17.0261C17.8327 16.0374 21.033 14.6464 23.1421 13.0857C24.2834 12.2411 25.1937 10.9753 25.9182 9.61849C26.6472 8.25308 27.2171 6.73993 27.6525 5.34235C27.8486 4.71314 28.0184 4.10372 28.164 3.53705C28.3073 4.02016 28.469 4.53586 28.6497 5.07064C29.5474 7.72794 30.9563 10.9933 32.9729 13.0081C34.9894 15.023 38.2559 16.4291 40.914 17.3247Z"
                fill="#FEE156"
                stroke="black"
                stroke-width="1.6"
              ></path>
              <path
                d="M12.7594 34.2277C13.9646 35.4319 15.8822 36.253 17.4032 36.7674C15.8831 37.2817 13.9669 38.1028 12.7636 39.307C11.5604 40.5113 10.7409 42.4282 10.2278 43.9488C9.71221 42.4282 8.88955 40.5113 7.68426 39.307C6.4722 38.096 4.53982 37.2725 3.0148 36.7587C2.93393 36.7315 2.85382 36.705 2.77461 36.6792C2.8432 36.6537 2.9125 36.6277 2.98243 36.6012C4.47699 36.0354 6.34413 35.2272 7.59005 34.3052C8.29966 33.7801 8.84885 33.0073 9.27429 32.2105C9.69568 31.4213 10.024 30.5545 10.2746 29.7572C10.7931 31.2481 11.5989 33.0682 12.7594 34.2277Z"
                fill="#FEE156"
                stroke="black"
                stroke-width="1.6"
              ></path>
            </svg>
            Welcome to <span className="text-primary">Tourist</span>
          </span>
        </h1>
        <div className="flex justify-end mb-5">
          <button className="bg-primary text-white rounded py-2 px-4 text-sm" onClick={handleOpenModal}>
            <PlusOutlined className="mr-1" />
            Create Tourist
          </button>
        </div>
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
                loading={isLoading || isFetching}
                handleEdit={() => handleTouristEdit(item.id)}
                handleDelete={() => handleTouristDelete(item.id)}
              />
            ))}
        </div>
        <br />
        <div className="flex justify-end">
          <Pagination
            defaultCurrent={page}
            onChange={(page) => {
              setPage(page);
            }}
            total={data?.totalrecord}
            showSizeChanger={false}
            showQuickJumper
            showTotal={(total) => `Total ${total} items`}
          />
        </div>
      </div>
    </LayoutApp>
  );
}
