"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateForm({ type }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [writer, setWriter] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = {
      title,
      body,
      writer,
      time,
    };

    const res = await fetch("http://localhost:4000/bloglist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    if (res.status === 201) {
      router.push("/Blogs");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-5 pt-5">
        <div className=" flex flex-col max-w-xl gap-2">
          <label className=" font-semibold" htmlFor="title">
            Name
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add title"
            className=" outline-none border rounded-full text-bgColor py-2 px-4 placeholder:font-medium"
          />
        </div>
        {type === "foods" ? (
          <div className=" flex flex-col max-w-xl gap-2">
            <label htmlFor="category">Select Category</label>
            <select
              name="category"
              id="category"
              className=" outline-none border rounded-2xl py-2 px-4 placeholder:font-medium text-bgColor"
            >
              <option disabled>Select category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
        ) : null}

        <div className=" flex flex-col max-w-xl gap-2">
          <label className=" font-semibold" htmlFor="content">
            Description
          </label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="Write something..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className=" outline-none border rounded-2xl py-2 px-4 placeholder:font-medium text-bgColor"
          ></textarea>
        </div>

        <div className=" flex flex-col w-fit gap-2">
          <label className=" font-semibold" htmlFor="image">
            Preview Image
            <span className=" block font-medium mt-2 bg-primary w-fit px-10 py-2 rounded-full">
              Choose file
            </span>
          </label>
          <input type="file" id="image" accept=" image/*" />
        </div>

        <div className=" flex flex-col max-w-xl gap-2">
          <label className=" font-semibold" htmlFor="publisher">
            Price
          </label>
          <input
            type="text"
            id="publisher"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
            placeholder="e.g Gloria Dasilva"
            className=" outline-none border rounded-full py-2 px-4 placeholder:font-medium text-bgColor"
          />
        </div>

        {/* <div className=" flex flex-col max-w-xl gap-2">
          <label className=" font-semibold" htmlFor="time">
            Date & Time
          </label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="12/10/23 10:00 AM"
            className=" outline-none border rounded-full py-2 px-4 placeholder:font-medium"
          />
        </div> */}

        <button
          onClick={handleSubmit}
          className=" text-white self-end bg-primary p-2 w-[250px] rounded-full cursor-pointer"
        >
          <p>Publish</p>
        </button>
      </form>
    </div>
  );
}
