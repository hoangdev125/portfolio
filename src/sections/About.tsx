import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { BookOpen, Code, Trophy } from 'lucide-react';

const STATS = [
  { id: 'projects', value: '10+', label: 'Projects Completed', icon: Trophy, color: 'text-cyan-400 bg-cyan-400/10' },
  { id: 'techs', value: '15+', label: 'Technologies Learned', icon: Code, color: 'text-purple-500 bg-purple-500/10' },
  { id: 'experience', value: '2+ Years', label: 'Learning Experience', icon: BookOpen, color: 'text-blue-500 bg-blue-500/10' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden px-6">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Me" subtitle="Giới thiệu bản thân" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Self-introduction text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Đam mê kiến tạo ứng dụng web <span className="text-cyan-400">hiện đại</span> & <span className="text-blue-500">tối ưu</span>
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Tôi là Hoàng, một sinh viên Công nghệ Thông tin đầy nhiệt huyết với niềm đam mê sâu sắc trong lĩnh vực phát triển ứng dụng Web Fullstack. Tôi thích giải quyết các vấn đề phức tạp và biến ý tưởng sáng tạo thành các sản phẩm kỹ thuật số thực tế, mượt mà và trực quan.
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Với tư duy lập trình chặt chẽ và kinh nghiệm thực hành từ các dự án cá nhân cũng như bài tập thực tế tại trường đại học, tôi định hình bản thân là một kỹ sư Fullstack đa năng. Tôi tin tưởng sự kết hợp giữa giao diện người dùng bóng bẩy của <strong>React / TypeScript</strong> cùng hệ thống nghiệp vụ ổn định, an toàn từ <strong>Spring Boot (Java)</strong> và <strong>MySQL</strong> sẽ mang lại trải nghiệm phần mềm tối đa cho người dùng.
            </p>

            {/* Micro Highlights of stack */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-center">
                <span className="block text-blue-500 font-bold text-sm mb-1">Frontend</span>
                <span className="text-gray-500 text-xs">React, TS, Tailwind</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-center">
                <span className="block text-purple-500 font-bold text-sm mb-1">Backend</span>
                <span className="text-gray-500 text-xs">Java, Spring Boot</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-center">
                <span className="block text-cyan-400 font-bold text-sm mb-1">Database</span>
                <span className="text-gray-500 text-xs">MySQL, relational</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  whileHover={{ x: 6, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card glow-border p-6 rounded-2xl flex items-center space-x-6 cursor-pointer relative overflow-hidden group"
                >
                  <div className={`p-4 rounded-xl shrink-0 ${stat.color} transition-colors duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {stat.value}
                    </h4>
                    <p className="text-gray-500 text-sm font-medium tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
