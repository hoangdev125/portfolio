import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "student-management",
    name: "Student Management System",
    description:
      "Hệ thống quản lý sinh viên toàn diện (Fullstack), cho phép quản lý thông tin sinh viên, khoa, lớp học và kết quả học tập một cách trực quan, tối ưu hóa quy trình quản trị học vụ trong trường học.",
    techStack: ["React", "TypeScript", "Spring Boot", "MySQL", "Tailwind CSS"],
    githubLink: "https://edu-manager-beige.vercel.app/",
    demoLink: "#",
    image: "/images/student-management.svg",
    featured: true,
    features: [
      "CRUD Student: Quản lý hồ sơ, thông tin liên lạc và tình trạng học tập của sinh viên.",
      "CRUD Department: Tổ chức và quản trị các khoa, lớp học chuyên ngành.",
      "Tìm kiếm & Lọc nâng cao: Tra cứu nhanh sinh viên theo tên, mã số sinh viên, khoa hoặc niên khóa.",
      "Dashboard thống kê trực quan: Biểu đồ trực quan hóa dữ liệu phân bố điểm số và sĩ số sinh viên.",
      "Phân quyền bảo mật: Xác thực tài khoản Admin và Giảng viên để phân chia quyền lực điều hành.",
    ],
  },
  {
    id: "quiz-app",
    name: "Interactive Quiz Application",
    description:
      "Ứng dụng làm trắc nghiệm tương tác cao với giao diện hiện đại, phản hồi kết quả trực quan và thống kê điểm số sinh động cho người học.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://quiz-dongh.vercel.app/",
    demoLink: "#",
    image: "/images/quiz-app.svg",
    featured: false,
  },
  {
    id: "portfolio-site",
    name: "Personal Developer Portfolio",
    description:
      "Trang thông tin cá nhân cao cấp giới thiệu bản thân, kỹ năng cốt lõi và các dự án thực tế nổi bật với phong cách Glassmorphism mượt mà.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/hoang-dev/portfolio-website",
    demoLink: "#",
    image: "/images/portfolio.svg",
    featured: false,
  },
];
