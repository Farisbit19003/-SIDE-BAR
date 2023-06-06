import React from "react";
import { BiCollection, BiEdit, BiMapPin, BiPhone } from "react-icons/bi";
import { BsBoxSeam, BsPercent } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import {
  AdminDeleteStore,
  AllShops,
  DeleteStore,
  SellerShops,
} from "../Create Shop/functions";
const DetailsCard = ({
  page,
  singleShop,
  ok,
  proLength,
  OrdersLength,
  GrandTotal,
}) => {
  const dateStr = singleShop?.createdAt;
  const dateObj = new Date(dateStr);
  const formattedDate = dateObj.toLocaleDateString();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        if (page == "Admin") {
          AdminDeleteStore(_id)
            .then((res) => {
              if (res.error) {
                toast.error(res.error);
              } else {
                swal("Deleted SuccessFully", {
                  icon: "success",
                });
                AllShops(dispatch);
                navigate("/shop");
              }
            })
            .catch((error) => {
              toast.error(error);
            });
        } else {
          DeleteStore(_id)
            .then((res) => {
              if (res.error) {
                toast.error(res.error);
              } else {
                swal("Deleted SuccessFully", {
                  icon: "success",
                });
                SellerShops(dispatch);
                navigate("/my-shop");
              }
            })
            .catch((error) => {
              toast.error(error);
            });
        }
      }
    });
  };
  return !singleShop ? (
    <div className=" inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <span className="mt-16 text-gray-500 text-lg font-semibold">
          Opps Something Wrong...
        </span>
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-12 gap-6 font-sans">
      {singleShop?.status === "InActive" && page !== "Admin" && (
        <div className="col-span-12 rounded-lg bg-red-500 px-5 py-4 text-sm font-sans font-semibold">
          Shop is not Activated.It will Approved by Admin.You need to add
          atleast 5 Products
        </div>
      )}
      {/* about Shop */}
      <div className="order-1 col-span-12 sm:col-span-6 xl:order-1 xl:col-span-4 3xl:col-span-3">
        <div className="flex flex-col items-center rounded shadow bg-white py-8 px-6">
          <div className="relative mb-5 h-36 w-36 rounded-full">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-gray-100">
              <img src={singleShop?.main_pic?.url} alt="" className="h-full" />
            </div>
          </div>

          <h1 className="mb-2 text-xl font-semibold text-heading">
            {singleShop?.Storename}
          </h1>

          <div className="mt-5 flex w-full justify-start">
            <span className="me-2 mt-0.5 text-muted-light">
              <BiMapPin size={25} color="green" className="align-middle" />
            </span>
            <address className="text-sm not-italic text-body flex flex-col">
              {singleShop?.mapAddress}
            </address>
          </div>

          <div className="mt-3 flex w-full justify-start">
            <span className="me-2 mt-0.5 text-muted-light">
              <BiPhone size={25} color="green" className="align-middle" />
            </span>
            <a className="text-sm text-body">{singleShop?.Storewhatsapp}</a>
          </div>

          <div className="mt-7 grid w-full grid-cols-1">
            <a
              href={`https://bazakr-pk-frontend.vercel.app/shop/${singleShop?.slug}`}
              target="_blank"
              className="inline-flex border-2 border-[#f2f2f2] hover:scale-95 transition-transform h-12 flex-shrink-0 items-center justify-center rounded font-sans text-[#248f59]  px-5 py-0 font-semibold leading-none !text-heading outline-none  duration-300 ease-in-out focus:ring-1 "
              rel="noreferrer"
            >
              Visit Shop
            </a>
          </div>
        </div>
      </div>

      {/* Cover Photo */}
      <div className="relative flex shadow bg-white items-center justify-center order-2 col-span-12 h-full min-h-[400px] overflow-hidden rounded bg-light xl:order-2 xl:col-span-8 3xl:col-span-9">
        <div className="flex lg:h-[20.1875rem] w-full mt-2">
          <img src={singleShop?.cover_pic?.url} alt="" className="w-full" />
        </div>
        <div className="justify-between flex">
          {page === "Admin" ? (
            ""
          ) : (
            <Link to={`/update-shop/${singleShop?.slug}`}>
              <button className="p-2 end-3 bg-[#248F59] hover:text-white text-[#f2f2f2] hover:scale-95 transition-transform  flex flex-row rounded-md ease-in-out absolute top-3">
                <BiEdit size={25} className="me-2 w-4 align-middle" /> Edit Shop
              </button>
            </Link>
          )}

          {proLength?.length !== 0 && !ok ? (
            ""
          ) : (
            <button
              onClick={() => handleDelete(singleShop?._id)}
              className="p-2 start-3 bg-red-600 text-[#f2f2f2] hover:font-medium  flex flex-row rounded-md ease-in-out absolute top-3"
            >
              <BiEdit size={25} className="me-2 w-4 align-middle" /> Delete Shop
            </button>
          )}
        </div>
      </div>

      {/* Mini Dashboard */}
      <div className="order-4  col-span-12 xl:order-3 xl:col-span-9">
        <div className="grid shadow bg-white h-full grid-cols-1 gap-3 rounded bg-light p-4 md:grid-cols-3">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">Products</h2>

            <div className="border border-gray-100">
              <div className="flex items-center border-b border-gray-100 py-3 px-4">
                <div className="flex  items-center justify-center rounded-full bg-[#FC9EC6] p-3 text-light">
                  {/* <CubeIcon width={18} /> */}
                  <BsBoxSeam size={25} />
                </div>

                <div className="ms-3">
                  <p className="mb-0.5 text-lg font-semibold text-sub-heading">
                    {proLength?.length}
                  </p>
                  <p className="mt-0 text-sm text-muted">Products</p>
                </div>
              </div>

              <div className="flex items-center py-3 px-4">
                <div className="flex items-center justify-center rounded-full bg-[#6EBBFD] p-3 text-light">
                  {/* <OrdersIcon width={16} /> */}
                  <BiCollection size={25} />
                </div>

                <div className="ms-3">
                  <p className="mb-0.5 text-lg font-semibold text-sub-heading">
                    {OrdersLength?.length}
                  </p>
                  <p className="mt-0 text-sm text-muted">Orders</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">Revenue</h2>

            <div className="border border-gray-100">
              <div className="flex items-center border-b border-gray-100 py-3 px-4">
                <div className="flex items-center justify-center rounded-full bg-[#C7AF99] p-3 text-light">
                  {/* <PriceWalletIcon width={16} /> */}
                  <TbReportMoney size={25} />
                </div>

                <div className="ms-3">
                  <p className="mb-0.5 text-md font-semibold">
                    {Math.round(GrandTotal)}/
                    <span className="text-xs font-semibold font-sans">PKR</span>
                  </p>
                  <p className="mt-0 text-sm  text-muted">gross-sales</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">Others</h2>

            <div className="border border-gray-100">
              <div className="flex items-center border-b border-gray-100 py-3 px-4">
                <div className="flexs items-center justify-center rounded-full bg-[#D59066] p-3 text-light">
                  <BsPercent size={25} />
                </div>

                <div className="ms-3">
                  <p className="mb-0.5 text-md font-semibold">10%</p>
                  <p className="mt-0 text-sm text-muted">commission-rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Misc. Information */}
      <div className="order-3 col-span-12 shadow bg-white rounded bg-light sm:col-span-6 xl:order-4 xl:col-span-3">
        <div className="flex flex-col border-b border-gray-200 p-6 2xl:p-7">
          <span className="mb-2 text-sm text-muted">Registered-Since</span>
          <span className="text-sm font-semibold text-sub-heading">
            {formattedDate}
          </span>
        </div>

        <div className="flex flex-col p-6 2xl:p-7">
          <span className="mb-4 text-lg font-semibold text-sub-heading">
            payment-info
          </span>

          <div className="flex flex-col space-y-3">
            <p className="text-sm text-sub-heading">
              <span className="block w-full text-muted">Name:</span>{" "}
              <span className="font-semibold">{singleShop?.user?.name}</span>
            </p>
            <p className="text-sm text-sub-heading">
              <span className="block w-full text-muted">Email:</span>{" "}
              <span className="font-semibold text-xs whitespace-nowrap mr-2">
                {singleShop?.user?.email}
              </span>
            </p>
            <p className="text-sm text-sub-heading">
              <span className="block w-full text-muted">Bank:</span>{" "}
              <span className="font-semibold">Stripe</span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
