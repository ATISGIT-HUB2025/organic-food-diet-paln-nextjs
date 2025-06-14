"use client";

import Breadcrumb from "@/app/components/Breadcrumb";
import Link from "next/link";
import React, { useState } from "react";
import { FaComment, FaUser } from "react-icons/fa";

const blogs = [
  {
    category: "Fitness",
    title: "How exercise can help you improve your health.",
    date: "25 Jan",
    comments: 10,
    image: "/img/blog/1.jpg",
  },
  {
    category: "Nutrition",
    title: "The best time to drink water to boost energy.",
    date: "22 Jan",
    comments: 2,
    image: "/img/blog/2.jpg",
  },
  {
    category: "Health",
    title: "Facts about eating slowly that will blow your mind.",
    date: "20 Jan",
    comments: 4,
    image: "/img/blog/3.jpg",
  },
  {
    category: "Fitness",
    title: "How exercise can help you improve your health.",
    date: "25 Jan",
    comments: 10,
    image: "/img/blog/1.jpg",
  },
  {
    category: "Nutrition",
    title: "The best time to drink water to boost energy.",
    date: "22 Jan",
    comments: 2,
    image: "/img/blog/2.jpg",
  },
  {
    category: "Health",
    title: "Facts about eating slowly that will blow your mind.",
    date: "20 Jan",
    comments: 4,
    image: "/img/blog/3.jpg",
  },
  {
    category: "Fitness",
    title: "How exercise can help you improve your health.",
    date: "25 Jan",
    comments: 10,
    image: "/img/blog/1.jpg",
  },
  {
    category: "Nutrition",
    title: "The best time to drink water to boost energy.",
    date: "22 Jan",
    comments: 2,
    image: "/img/blog/2.jpg",
  },
  {
    category: "Health",
    title: "Facts about eating slowly that will blow your mind.",
    date: "20 Jan",
    comments: 4,
    image: "/img/blog/3.jpg",
  },
];

const Blog = ({ limit }) => {
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const fullList = limit ? blogs.slice(0, limit) : blogs;
  const totalPages = Math.ceil(fullList.length / blogsPerPage);

  const paginatedBlogs = limit
    ? fullList
    : fullList.slice(
        (currentPage - 1) * blogsPerPage,
        currentPage * blogsPerPage
      );

  return (
    <>
      <section className="py-12 bg-white text-black">
        {/* Heading */}
        <div className="relative z-10 text-center mb-12 px-4">
          <div className="section-title-6 text-center pt-5">
            <span className="uppercase text-sm text-gray-500 tracking-wider">
              Blog
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Our Latest Blog
            </h2>
          </div>
        </div>

        <div className="flex justify-center gap-8 flex-wrap px-6">
          {paginatedBlogs.map((blog, index) => (
            <Link key={index} href={`/blog/${blog.title}`}>
              <div className="w-full md:w-[300px] bg-white rounded-xl shadow-lg overflow-hidden relative image-hover">
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute bottom-[-1.2rem] right-4 bg-green-600 text-white rounded-full px-3 py-1 text-sm font-semibold shadow-lg">
                    {blog.date}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-green-500 font-semibold">
                    {blog.category}
                  </p>
                  <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
                </div>
                <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaComment className="text-xs text-green-500" />
                    {blog.comments < 10 ? `0${blog.comments}` : blog.comments}
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="flex items-center gap-1 text-sm">
                    <FaUser className="text-xs text-green-500" />
                    Admin
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {!limit && totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border rounded-full cursor-pointer ${
                  currentPage === i + 1
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600"
                } hover:bg-green-500 hover:text-white transition`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {limit && (
          <div className="flex justify-center mt-8">
            <Link href="/blog" className="theme_btn">
              View More
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Blog;
