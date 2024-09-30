"use client";
import useFetch from "./useFetch";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import done from "@/public/done.svg";
import cancel from "@/public/cancel.svg";
import Image from "next/image";

export default function OrderList({type}) {
  const router = useRouter();
  // const { data, loading, error } = useFetch("http://localhost:4000/bloglist");

  // const handleDelete = async (id) => {
  //     const res = await fetch('http://localhost:4000/bloglist/' + id, {
  //         method: "DELETE"
  //     })
  //     if(res.ok) {
  //         router.refresh()
  //     }
  // }
  const data = [
    {
      id: 1,
      location: "Room",
      status: 'completed',
      order: [
        {
          id: 11,
          name: "Grilled Lamb",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis nam modi quam, iure corporis velit eaque impedit doloribus, temporibus adipisci. Ipsa veniam tempora necessitatibus beatae? Rerum ullam nisi officiis. Doloremque, aspernatur provident! Odit similique molestiae suscipit beatae quasi facilis sint iste eveniet ipsam, inventore unde labore aliquam, eos dolore.",
          img: "/food/grilled-lamb.png",
          price: 16000,
          category: "breakfast",
          
        },
        {
          id: 13,
          name: "English Breakfast",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis nam modi quam, iure corporis velit eaque impedit doloribus, temporibus adipisci. Ipsa veniam tempora necessitatibus beatae? Rerum ullam nisi officiis. Doloremque, aspernatur provident! Odit similique molestiae suscipit beatae quasi facilis sint iste eveniet ipsam, inventore unde labore aliquam, eos dolore.",
          img: "/food/eggs.png",
          price: 10000,
          category: "breakfast",
        },
      ],
      number: "34",
    },
    {
      id: 2,
      location: "Bar",
      status: 'canceled',
      order: [
        {
          id: 11,
          name: "Grilled Lamb",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis nam modi quam, iure corporis velit eaque impedit doloribus, temporibus adipisci. Ipsa veniam tempora necessitatibus beatae? Rerum ullam nisi officiis. Doloremque, aspernatur provident! Odit similique molestiae suscipit beatae quasi facilis sint iste eveniet ipsam, inventore unde labore aliquam, eos dolore.",
          img: "/food/grilled-lamb.png",
          price: 16000,
          category: "breakfast",
        },
        {
          id: 12,
          name: "Hamburger",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis nam modi quam, iure corporis velit eaque impedit doloribus, temporibus adipisci. Ipsa veniam tempora necessitatibus beatae? Rerum ullam nisi officiis. Doloremque, aspernatur provident! Odit similique molestiae suscipit beatae quasi facilis sint iste eveniet ipsam, inventore unde labore aliquam, eos dolore.",
          img: "/food/hamburger.png",
          price: 6000,
          category: "breakfast",
        },
        {
          id: 13,
          name: "English Breakfast",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis nam modi quam, iure corporis velit eaque impedit doloribus, temporibus adipisci. Ipsa veniam tempora necessitatibus beatae? Rerum ullam nisi officiis. Doloremque, aspernatur provident! Odit similique molestiae suscipit beatae quasi facilis sint iste eveniet ipsam, inventore unde labore aliquam, eos dolore.",
          img: "/food/eggs.png",
          price: 10000,
          category: "breakfast",
        },
      ],
      number: "05",
    },
    {
      id: 3,
      location: "Room",
      status: 'completed',
      order: [
        {
          id: 11,
          name: "Grilled Lamb",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis nam modi quam, iure corporis velit eaque impedit doloribus, temporibus adipisci. Ipsa veniam tempora necessitatibus beatae? Rerum ullam nisi officiis. Doloremque, aspernatur provident! Odit similique molestiae suscipit beatae quasi facilis sint iste eveniet ipsam, inventore unde labore aliquam, eos dolore.",
          img: "/food/grilled-lamb.png",
          price: 16000,
          category: "breakfast",
        },
        {
          id: 12,
          name: "Hamburger",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis nam modi quam, iure corporis velit eaque impedit doloribus, temporibus adipisci. Ipsa veniam tempora necessitatibus beatae? Rerum ullam nisi officiis. Doloremque, aspernatur provident! Odit similique molestiae suscipit beatae quasi facilis sint iste eveniet ipsam, inventore unde labore aliquam, eos dolore.",
          img: "/food/hamburger.png",
          price: 6000,
          category: "breakfast",
        },
      ],
      number: "14",
    },
    {
      id: 4,
      location: "Bar",
      status: 'canceled',
      order: [
        {
          id: 11,
          name: "Grilled Lamb",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis nam modi quam, iure corporis velit eaque impedit doloribus, temporibus adipisci. Ipsa veniam tempora necessitatibus beatae? Rerum ullam nisi officiis. Doloremque, aspernatur provident! Odit similique molestiae suscipit beatae quasi facilis sint iste eveniet ipsam, inventore unde labore aliquam, eos dolore.",
          img: "/food/grilled-lamb.png",
          price: 16000,
          category: "breakfast",
        },
        {
          id: 12,
          name: "Hamburger",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis nam modi quam, iure corporis velit eaque impedit doloribus, temporibus adipisci. Ipsa veniam tempora necessitatibus beatae? Rerum ullam nisi officiis. Doloremque, aspernatur provident! Odit similique molestiae suscipit beatae quasi facilis sint iste eveniet ipsam, inventore unde labore aliquam, eos dolore.",
          img: "/food/hamburger.png",
          price: 6000,
          category: "breakfast",
        },
        {
          id: 13,
          name: "English Breakfast",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis nam modi quam, iure corporis velit eaque impedit doloribus, temporibus adipisci. Ipsa veniam tempora necessitatibus beatae? Rerum ullam nisi officiis. Doloremque, aspernatur provident! Odit similique molestiae suscipit beatae quasi facilis sint iste eveniet ipsam, inventore unde labore aliquam, eos dolore.",
          img: "/food/eggs.png",
          price: 10000,
          category: "breakfast",
        },
      ],
      number: "20",
    },
  ];
  const [orderId, setOrderId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const rows = data && data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data && data.length / rowsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function handlePage(id) {
    setCurrentPage(id);
  }
  function handleSelect(e) {
    const value = e.target.value;
    if (value == 10) {
      setRowsPerPage(10);
    } else if (value == 20) {
      setRowsPerPage(20);
    } else if (value == 30) {
      setRowsPerPage(30);
    } else if (value == 40) {
      setRowsPerPage(40);
    } else if (value == 50) {
      setRowsPerPage(50);
    } else {
      setRowsPerPage(10);
    }
  }
  return (
    <>
      {/* { loading && <div><p>Loading...</p></div>}
    { error && <div><p>{error}</p></div>} */}
      {data && (
        <div className=" mt-10 ">
          <div className={orderId === null ? 'hidden' : `  modal absolute w-full flex-1 h-full bg-bgColor bg-opacity-90 top-0 flex justify-center items-center`}>
            <div className="relative w-[400px] z-20 max-h-[500px] bg-white rounded-lg text-black overflow-scroll">
              <div className=" px-5 py-3">
                <div className=" flex flex-col gap-7">
                  {orderId && data[`${orderId}`].order.map((order, index) => {
                    return (
                      <div key={index} className=" flex items-center gap-5">
                        <Image
                          src={order.img}
                          alt="food image"
                          width={40}
                          height={40}
                          className=" w-[50px]"
                        />
                        <div className=" flex-1">
                          <p className=" font-semibold">{order.name}</p>
                          <div className=" flex justify-between mt-1">
                            <p>₦{order.price}</p>
                            <p>x2</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" flex justify-between items-center bg-white sticky bottom-0 w-full px-5 py-3">
                <div>
                  <h2>Total: 
                    {orderId}
                  </h2>
                  <p>₦50,000</p>
                </div>
                <button className=" bg-primary px-6 py-2 rounded-md text-white" onClick={() => setOrderId(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
          <table className=" w-full bg-bgColor table-container rounded-t-xl">
            <thead className=" bg-primary text-bgColor">
              <th className=" border-r text-left p-4 rounded-tl-xl font-semibold">
                Location
              </th>
              <th className=" border-r text-left p-4 font-semibold">
                Room/Table No
              </th>
              <th className="border-r text-left p-4 font-semibold">View</th>
              {type === 'history' && <th className=" text-left p-4 font-semibold rounded-tr-xl">View</th>}
              {type === 'history' ? null : <th className=" text-left p-4 rounded-tr-xl font-semibold">
                Action
              </th>}
            </thead>
            <tbody className=" ">
              {data &&
                rows.map((item, index) => (
                  <tr key={item.id} className=" table-row h-[62px]">
                    <td className=" border-r border-t w-[25%] p-4 capitalize font-semibold text-sm">
                      {item.location}
                    </td>
                    <td className=" border-r w-[25%] p-4 border-t capitalize text-sm font-medium">
                      {item.number}
                    </td>
                    <td className=" border-r p-4 border-t flex  view-col">
                      <button className=" py-1 px-4 rounded-md" onClick={() => setOrderId(index)}>View</button>
                    </td>
                    {type === 'history' && <td className=" border-t text-left p-4 font-semibold">
                        {item.status}</td>}
                   {type === 'history' ? null : <td className=" w-[25%] p-4 border-t rounded-br-xl">
                      <div className=" flex flex-row gap-3">
                        <button className="cancel-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            width="30px"
                            height="30px"
                          >
                            <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" />
                          </svg>
                        </button>
                        <button className="done-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            width="30px"
                            height="30px"
                          >
                            <path d="M 30 4 C 14.561 4 2 16.561 2 32 C 2 47.439 14.561 60 30 60 L 33 60 C 48.439 60 61 47.439 61 32 C 61 26.600951 59.460842 21.556431 56.802734 17.275391 L 62.039062 12.039062 L 59.210938 9.2109375 L 54.423828 13.998047 C 49.283425 7.890176 41.589024 4 33 4 L 30 4 z M 33 8 C 40.486401 8 47.18112 11.446946 51.585938 16.835938 L 33.375 35.046875 L 21.664062 23.335938 L 18.835938 26.164062 L 33.375 40.703125 L 53.882812 20.195312 C 55.862819 23.683904 57 27.710097 57 32 C 57 45.234 46.233 56 33 56 C 19.767 56 9 45.234 9 32 C 9 18.766 19.767 8 33 8 z" />
                          </svg>
                        </button>
                      </div>
                    </td>}
                  </tr>
                ))}
            </tbody>
          </table>
          <div className=" bg-bgColor border-t p-4 rounded-br-xl rounded-bl-xl flex justify-between pagination">
            <div>
              <label htmlFor="rows" className=" text-xs">
                Showing
                <select
                  name="rows"
                  id="rows"
                  className=" p-1 border  bg-transparent mx-1 text-xs font-semibold rounded-md outline-none"
                  onChange={handleSelect}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
                of 50
              </label>
            </div>

            <ul className=" flex gap-[2px]">
              <li>
                <button
                  className="bg-gray-600 min-w-[25px] min-h-[30px] p-1 rounded-md"
                  onClick={prevPage}
                >
                  {"<"}
                </button>
              </li>
              {numbers.map((n, i) => (
                <li key={i}>
                  <button
                    className={
                      currentPage == n
                        ? "bg-primary text-white min-w-[25px] min-h-[30px] p-1 rounded-md"
                        : "bg-gray-600 min-w-[25px] min-h-[30px] p-1 rounded-md"
                    }
                    onClick={() => handlePage(n)}
                  >
                    {n}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className="bg-gray-600 min-w-[25px] min-h-[30px] p-1 rounded-md"
                  onClick={nextPage}
                >
                  {">"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
