import React from "react";
import AdminLayout from "../../layout/admin";
import { BiCollection, BiEdit, BiMapPin, BiPhone } from "react-icons/bi";
import { BsBoxSeam, BsPercent } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { TfiMoney } from "react-icons/tfi";


const ShopDetails = () => {
  return (
    <>
      <AdminLayout>
        <div className="grid grid-cols-12 gap-6 font-sans">
          {/* {!is_active && (
        <div className="col-span-12 rounded-lg bg-red-500 px-5 py-4 text-sm text-light">
          {t('common:text-permission-message')}
        </div>
      )} */}
          {/* about Shop */}
          <div className="order-2 col-span-12 sm:col-span-6 xl:order-1 xl:col-span-4 3xl:col-span-3">
            <div className="flex flex-col items-center rounded shadow bg-white py-8 px-6">
              <div className="relative mb-5 h-36 w-36 rounded-full">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-gray-100">
                  {/* <Image
                src={logo?.thumbnail ?? '/avatar-placeholder.svg'}
                layout="fill"
                objectFit="contain"
                alt={name}
              /> */}
              <img src="https://res.cloudinary.com/dc367rgig/image/upload/v1672990577/koblcyxuwpzmn8ifv1rg.jpg"
                alt=""  className="h-full"/>
                </div>

                {/* {is_active ? (
              <div className="end-2 absolute bottom-4 h-5 w-5 overflow-hidden rounded-full bg-light">
                <CheckMarkFill width={20} className="me-2 text-accent" />
              </div>
            ) : (
              <div className="end-2 absolute bottom-4 h-5 w-5 overflow-hidden rounded-full bg-light">
                <CloseFillIcon width={20} className="me-2 text-red-500" />
              </div>
            )} */}
              </div>

              <h1 className="mb-2 text-xl font-semibold text-heading">
                GROILLA JEANS
              </h1>
              <p className="text-center text-sm text-body">
                {/* <ReadMore character={70}>{description!}</ReadMore> */}
              </p>

              <div className="mt-5 flex w-full justify-start">
                <span className="me-2 mt-0.5 text-muted-light">
                < BiMapPin size={25} color="green" className="align-middle"/>
                </span>
                <address className="text-sm not-italic text-body flex flex-col">
                  {/* {!isEmpty(formatAddress(address!))
                ? formatAddress(address!) */}  
                  address
                </address>
              </div>

              <div className="mt-3 flex w-full justify-start">
                <span className="me-2 mt-0.5 text-muted-light">
                  {/* <PhoneIcon width={16} /> */}
                  <BiPhone size={25} color="green" className="align-middle"/>
                </span>
                <a className="text-sm text-body">
                  {/* {settings?.contact
                ? settings?.contact*/}
                  0324-1064796
                </a>
              </div>

              <div className="mt-7 grid w-full grid-cols-1">
                {/* <a
              href={`${process.env.NEXT_PUBLIC_SHOP_URL}/${locale}/shops/${slug}`}
              target="_blank"
              className="inline-flex h-12 flex-shrink-0 items-center justify-center rounded !bg-gray-100 px-5 py-0 !font-normal leading-none !text-heading outline-none transition duration-300 ease-in-out hover:!bg-accent hover:!text-light focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700"
              rel="noreferrer"
            >
              {t('common:text-visit-shop')}
            </a> */}
                <button className="inline-flex h-12 flex-shrink-0 items-center justify-center rounded !bg-gray-100 px-5 py-0 hover:!text-lg hover:!font-medium  !font-normal leading-none !text-heading outline-none transition duration-300 ease-in-out focus:!outline-none hover:!text-[#f2f2f2] hover:!bg-[#248F59] hover:!bg-accent hover:!text-light focus:shadow ">
                  Visit Shop
                </button>
              </div>
            </div>
          </div>

          {/* Cover Photo */}
          <div className="relative flex shadow bg-white items-center justify-center order-1 col-span-12 h-full min-h-[400px] overflow-hidden rounded bg-light xl:order-2 xl:col-span-8 3xl:col-span-9">
            {/* <Image
          src={cover_image?.original ?? '/product-placeholder-borderless.svg'}
          layout="fill"
          objectFit="contain"
          alt={name}
        /> */}
        <div className="flex lg:h-[20.1875rem] w-full">
            <img src="https://res.cloudinary.com/dc367rgig/image/upload/v1672990577/koblcyxuwpzmn8ifv1rg.jpg"
                alt=""  className="w-full"/>
                </div>
            {/* {hasAccess(adminAndOwnerOnly, permissions) && (
          <LinkButton
            size="small"
            className="absolute top-3 bg-blue-500 shadow-sm hover:bg-blue-600 ltr:right-3 rtl:left-3"
            href={`/${shop}/edit`}
          >
            <EditIcon className="me-2 w-4" /> {t('common:text-edit-shop')}
          </LinkButton>
        )} */}
        <button className="p-2 end-3 hover:text-[#f2f2f2] hover:font-medium  flex flex-row rounded-md ease-in-out absolute top-3 bg-blue-500 shadow-sm hover:bg-blue-600 ltr:right-3 rtl:left-3">
            <BiEdit size={25} className="me-2 w-4 align-middle"/> Edit Shop
        </button>
          </div>

          {/* Mini Dashboard */}
          <div className="order-4  col-span-12 xl:order-3 xl:col-span-9">
            <div className="grid shadow bg-white h-full grid-cols-1 gap-3 rounded bg-light p-4 md:grid-cols-3">
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-heading">products</h2>

                <div className="border border-gray-100">
                  <div className="flex items-center border-b border-gray-100 py-3 px-4">
                    <div className="flex  items-center justify-center rounded-full bg-[#FC9EC6] p-3 text-light">
                      {/* <CubeIcon width={18} /> */}
                      <BsBoxSeam size={25} />
                    </div>

                    <div className="ms-3">
                      <p className="mb-0.5 text-lg font-semibold text-sub-heading">
                        55
                      </p>
                      <p className="mt-0 text-sm text-muted">products</p>
                    </div>
                  </div>

                  <div className="flex items-center py-3 px-4">
                    <div className="flex items-center justify-center rounded-full bg-[#6EBBFD] p-3 text-light">
                      {/* <OrdersIcon width={16} /> */}
                      <BiCollection size={25}/>
                    </div>

                    <div className="ms-3">
                      <p className="mb-0.5 text-lg font-semibold text-sub-heading">
                        100
                      </p>
                      <p className="mt-0 text-sm text-muted">orders</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-heading">revenue</h2>

                <div className="border border-gray-100">
                  <div className="flex items-center border-b border-gray-100 py-3 px-4">
                    <div className="flex items-center justify-center rounded-full bg-[#C7AF99] p-3 text-light">
                      {/* <PriceWalletIcon width={16} /> */}
                      <TbReportMoney size={25}/>
                    </div>

                    <div className="ms-3">
                      <p className="mb-0.5 text-md font-semibold">
                        7895$
                      </p>
                      <p className="mt-0 text-sm  text-muted">gross-sales</p>
                    </div>
                  </div>

                  <div className="flex items-center py-3 px-4">
                    <div className="flex items-center justify-center rounded-full bg-[#FFA7AE] p-3 text-light">
                      {/* <DollarIcon width={12} /> */}
                      <TfiMoney size={25}/>
                    </div>

                    <div className="ms-3">
                      <p className="mb-0.5 text-md font-semibold ">
                        7895$
                      </p>
                      <p className="mt-0 text-sm  text-muted">current-balance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-heading">others</h2>

                <div className="border border-gray-100">
                  <div className="flex items-center border-b border-gray-100 py-3 px-4">
                    <div className="flexs items-center justify-center rounded-full bg-[#D59066] p-3 text-light">
                      {/* <PercentageIcon width={16} /> */}
                      <BsPercent size={25} />
                    </div>

                    <div className="ms-3">
                      <p className="mb-0.5 text-md font-semibold">
                        {/* {`${balance?.admin_commission_rate ?? 0} %` ?? 'Not Set'} */}
                        10%
                      </p>
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
              <span className="mb-2 text-sm text-muted">registered-since</span>
              <span className="text-sm font-semibold text-sub-heading">
                {/* {dayjs(created_at).format('MMMM D, YYYY')} */}
                12/12/12
              </span>
            </div>

            <div className="flex flex-col p-6 2xl:p-7">
              <span className="mb-4 text-lg font-semibold text-sub-heading">
                payment-info
              </span>

              <div className="flex flex-col space-y-3">
                <p className="text-sm text-sub-heading">
                  <span className="block w-full text-muted">name:</span>{" "}
                  <span className="font-semibold">
                    {/* {balance?.payment_info?.name} */}FARIS
                  </span>
                </p>
                <p className="text-sm text-sub-heading">
                  <span className="block w-full text-muted">email:</span>{" "}
                  <span className="font-semibold">
                    {/* {balance?.payment_info?.email} */}faris@faris.com
                  </span>
                </p>
                <p className="text-sm text-sub-heading">
                  <span className="block w-full text-muted">bank:</span>{" "}
                  <span className="font-semibold">
                    {/* {balance?.payment_info?.bank} */}STRIPE
                  </span>
                </p>
                <p className="text-sm text-sub-heading">
                  <span className="block w-full text-muted">account-no:</span>{" "}
                  <span className="font-semibold">
                    {/* {balance?.payment_info?.account} */}11223344556677
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default ShopDetails;
