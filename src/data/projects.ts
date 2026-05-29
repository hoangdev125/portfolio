import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "student-management",
    name: "Student Management System",
    category: "Fullstack",
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
    architecture: [
      "React frontend với component tái sử dụng và Tailwind CSS cho giao diện responsive.",
      "Spring Boot REST API xử lý CRUD sinh viên, khoa và lớp học.",
      "MySQL lưu trữ dữ liệu học vụ với mô hình quan hệ chặt chẽ.",
      "Dashboard và bộ lọc nâng cao giúp quản trị viên nhanh chóng truy xuất dữ liệu.",
    ],
    lessonsLearned: [
      "Thiết kế flow đăng nhập và phân quyền giúp cải thiện tính bảo mật.",
      "Xây dựng dashboard dữ liệu giúp người dùng đưa ra quyết định nhanh hơn.",
      "Tối ưu hóa cấu trúc database để giảm độ trễ truy vấn khi tìm kiếm.",
      "Sử dụng Tailwind để nhanh chóng tạo UI hiện đại mà vẫn nhất quán.",
    ],
  },
  {
    id: "quiz-app",
    name: "Interactive Quiz Application",
    category: "Frontend",
    description:
      "Ứng dụng làm trắc nghiệm tương tác cao với giao diện hiện đại, phản hồi kết quả trực quan và thống kê điểm số sinh động cho người học.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://quiz-dongh.vercel.app/",
    demoLink: "#",
    image: "/images/quiz-app.svg",
    featured: false,
    features: [
      "Thiết kế câu hỏi trắc nghiệm với phản hồi trực quan sau mỗi lượt chơi.",
      "Tính điểm và đánh giá kết quả chi tiết.",
      "Giao diện responsive tối ưu cho mọi thiết bị.",
    ],
    architecture: [
      "Single-page application React với state management đơn giản.",
      "UI chuyển động mượt mà bằng Framer Motion.",
    ],
    lessonsLearned: [
      "Tinh chỉnh trải nghiệm người dùng khi thao tác với quiz động.",
      "Tối ưu hiệu suất render component khi cập nhật điểm số.",
    ],
  },
  {
    id: "portfolio-site",
    name: "Personal Developer Portfolio",
    category: "Frontend",
    description:
      "Trang thông tin cá nhân cao cấp giới thiệu bản thân, kỹ năng cốt lõi và các dự án thực tế nổi bật với phong cách Glassmorphism mượt mà.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/hoang-dev/portfolio-website",
    demoLink: "#",
    image: "/images/portfolio.svg",
    featured: false,
    features: [
      "Thiết kế layout tối giản nhưng hiện đại cho portfolio cá nhân.",
      "Hỗ trợ responsive hoàn toàn trên mobile, tablet và desktop.",
    ],
    architecture: [
      "Component-first architecture giúp tái sử dụng UI và logic.",
      "Vite + React + Tailwind cho trải nghiệm dev nhanh và build nhẹ.",
    ],
    lessonsLearned: [
      "Giữ mã nguồn sạch và cấu trúc rõ ràng giúp bảo trì dễ dàng.",
      "Kết hợp animation nhẹ nhàng để tăng trải nghiệm premium.",
    ],
  },
];
