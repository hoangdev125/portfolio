import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../components/SectionTitle";
import { GraduationCap, Award, Brain, Star } from "lucide-react";

const TIMELINE_DATA = [
  {
    id: "edu-now",
    date: "2023 - Hiện tại",
    title: "Sinh viên Công nghệ Thông tin",
    institution: "Đại học Cần Thơ",
    description:
      "Chuyên ngành Kỹ thuật Phần mềm. Tập trung nghiên cứu lập trình fullstack",
    icon: GraduationCap,
    color: "text-blue-500 border-blue-500/30 bg-blue-500/10",
  },
  {
    id: "learn-fullstack",
    date: "2024",
    title: "Học tập & Thực hành Fullstack Web",
    institution: "Tự học & Dự án Cá nhân",
    description:
      "Bắt đầu nghiên cứu chuyên sâu về lập trình Web. Thành thạo xây dựng SPA bằng React và tích hợp với REST API của Spring Boot. Xây dựng dự án CRUD quản lý điểm và học tập.",
    icon: Brain,
    color: "text-purple-500 border-purple-500/30 bg-purple-500/10",
  },
  {
    id: "project-featured",
    date: "2025",
    title: "Xây dựng Student Management System",
    institution: "Dự án Cốt lõi",
    description:
      "Hoàn thiện hệ thống quản lý sinh viên quy mô lớn với đầy đủ tính năng xác thực, phân quyền, tối ưu hóa các câu truy vấn MySQL phức tạp và nâng cao chất lượng code bằng TypeScript.",
    icon: Award,
    color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  },
  {
    id: "future-ready",
    date: "2026",
    title: "Định hướng Kỹ sư Fullstack Junior",
    institution: "Chuẩn bị thực tập",
    description:
      "Đóng góp năng lực cho các dự án thực tế thông qua các chương trình Internship/Fresher. Sẵn sàng gia nhập các đội ngũ phát triển chuyên nghiệp.",
    icon: Star,
    color: "text-blue-500 border-blue-500/30 bg-blue-500/10",
  },
];

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 relative overflow-hidden px-6"
    >
      {/* Background decoration elements */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Learning Journey" subtitle="Lộ trình phát triển" />

        {/* Timeline container */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12 py-4">
          {TIMELINE_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="relative">
                {/* Date on the left (Desktop only) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="hidden md:block absolute -left-32 top-1.5 w-24 text-right text-sm font-bold text-cyan-400 uppercase"
                >
                  {item.date}
                </motion.div>

                {/* Timeline node dot icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  className={`absolute -left-[17px] top-1 p-1.5 rounded-full border-2 border-slate-900 bg-slate-950 ${item.color} shrink-0 z-10`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </motion.div>

                {/* Main Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="glass-card glow-border p-6 rounded-2xl ml-6 md:ml-8"
                >
                  {/* Date for mobile */}
                  <span className="md:hidden block text-xs font-bold text-cyan-400 uppercase mb-1">
                    {item.date}
                  </span>

                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <h4 className="text-sm font-medium text-gray-500 mb-4">
                    {item.institution}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
