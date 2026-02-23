"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  const projects = [
    {
      title: "Travel Booking Platform",
      description:
        "Ứng dụng đặt tour du lịch full-stack cho phép người dùng tìm kiếm, xem chi tiết tour, đặt chỗ và thanh toán trực tuyến. Hệ thống có trang quản trị để quản lý tour, người dùng và đơn đặt. Tối ưu trải nghiệm người dùng và thiết kế responsive.",
      link: "https://github.com/nguyendotai/travel-booking-site",
      tags: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
      ],
    },
    {
      title: "DTPerfume - E-commerce Website",
      description:
        "Website thương mại điện tử bán nước hoa với các chức năng đăng ký, đăng nhập, phân quyền người dùng (admin/user), quản lý sản phẩm, danh mục, giỏ hàng và đơn hàng. Tích hợp upload ảnh, xác thực email và hệ thống admin riêng.",
      link: "https://github.com/nguyendotai/dtperfume-site",
      tags: [
        "Next.js",
        "TypeScript",
        "Express",
        "Sequelize",
        "MySQL",
        "Redux Toolkit",
      ],
    },
  ];

  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero */}
      <motion.section
        id="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-90 pointer-events-none" />

        <motion.div variants={fadeInUp} className="relative z-10">
          <motion.img
            variants={fadeInUp}
            src="/avatar.jpg"
            alt="Tai"
            className="w-44 h-44 md:w-52 md:h-52 mx-auto rounded-full mb-10 border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 object-cover"
          />

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold mb-6 text-purple-600"
          >
            Nguyễn Đỗ Tài
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl mb-12 text-gray-300 max-w-3xl mx-auto"
          >
            Lập trình viên Full-Stack xây dựng các ứng dụng web hiện đại, hiệu
            năng cao và dễ mở rộng với hệ sinh thái JavaScript
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Xem Dự Án</span>
              <span className="absolute inset-0 bg-white/15 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </button>

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 rounded-xl hover:bg-blue-950/40 transition-all duration-300"
            >
              Liên Hệ
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Về Tôi
        </h2>

        <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            Tôi là một lập trình viên full-stack đam mê công nghệ, hiện đang
            sống và làm việc tại TP. Hồ Chí Minh, với định hướng xây dựng các
            ứng dụng web sạch, dễ mở rộng và tập trung vào trải nghiệm người
            dùng.
          </p>
          <p>
            Công nghệ tôi sử dụng bao gồm <strong>Next.js 14/15</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>,{" "}
            <strong>Prisma</strong> và các giải pháp backend hiện đại. Tôi thích
            biến những bài toán phức tạp thành các giải pháp gọn gàng và dễ bảo
            trì.
          </p>
          <p>
            Khi không lập trình, tôi thường tìm hiểu công nghệ mới, đóng góp mã
            nguồn mở hoặc lên kế hoạch cho những chuyến du lịch tiếp theo.
          </p>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Dự Án Của Tôi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <ProjectCard {...proj} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Kỹ Năng
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {skills.map((skill, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <SkillBadge skill={skill} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Kết Nối Với Tôi
        </h2>

        <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Họ và tên của bạn"
              required
              className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Email của bạn"
              required
              className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />

            <textarea
              name="message"
              placeholder="Nội dung tin nhắn"
              rows={6}
              required
              className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
