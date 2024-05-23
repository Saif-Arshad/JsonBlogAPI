import React from 'react';

function Route() {
  const apiUrl = process.env.NEXT_PUBLIC_URL;
  const allRoutes = [
    {
      method: "GET",
      link: `${apiUrl}api/all`,
      getting: "Get All the blogs"
    },
    {
      method: "GET",
      link: `${apiUrl}api/id/661b79f9afa98e5ea6cea585`,
      getting: "Get blog using ID"
    },
    {
      method: "GET",
      link: `${apiUrl}api/search/write something`,
      getting: "Search Blog using Blog titles"
    },
    {
      method: "GET",
      link: `${apiUrl}api/category/sport`,
      getting: "Get blogs with blog category"
    },
    {
      method: "GET",
      link: `${apiUrl}api/blog?page=1`,
      getting: "Get blogs with pagination",
      extra: "By default the limit is 8"
    },
    {
      method: "GET",
      link: `${apiUrl}api/blog?page=1&limit=4`,
      getting: "Get blogs with pagination and set limit",
      extra: "By default the limit is 8"
    },
  ];

  return (
    <div className="w-full py-7 flex justify-center">
      <div className="w-full max-w-4xl">
        <h1 className='font-bold text-2xl md:text-4xl mb-4'>All the Routes</h1>
        <div className="">
          <div className="flex py-2 px-4   font-bold text-sm md:text-base">
            <div className="w-1/4">Method</div>
            <div className="w-1/2">Link</div>
            <div className="w-1/4">Description</div>
          </div>
          {
            allRoutes.map((item, index) => (
              <div key={index} className=" k hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex flex-col md:flex-row p-4 text-sm md:text-base">
                  <div className="md:w-1/4">{item.method}</div>
                  <div className="md:w-1/2 break-all">{item.link}</div>
                  <div className="md:w-1/4 flex items-center gap-x-2">
                    {item.getting}
                  </div>
                </div>
                {item.extra && (
                  <div className="py-1 px-4 text-xs md:text-sm text-gray-500">
                    {item.extra}
                  </div>
                )}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Route;
