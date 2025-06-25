import { motion } from 'framer-motion'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Avatar from "../../assets/Piyushi.jpg";

const Home2 = () => {
  return (
    <motion.section 
      className="relative pt-16 md:pt-32 px-4 sm:px-6 w-full z-"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Transforming Ideas into Digital Reality
            </h2>
            
           <p className="text-lg text-gray-300 leading-relaxed">
  I'm a final-year B.Tech CSE student (2025) with a strong foundation in Java and the MERN stack. 
  I specialize in building robust full-stack applications with clean UI, scalable backends, and seamless integration of tools like Git, Gitea, and JIRA. 
  Passionate about product-driven development and agile collaboration, I aim to grow as a Software Engineer or Full Stack Developer in dynamic, fast-paced environments.
</p>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                 { name: 'Java Development', icon: '☕' },
                { name: 'Web Development ', icon: '🌐' },
                { name: 'Backend Engineering', icon: '🛠️' },
                 { name: 'Database Management', icon: '🗄️' },
                { name: 'DevOps', icon: '🚀' },
                  { name: 'Version Control ', icon: '🔧' },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-gray-800/70 backdrop-blur-sm rounded-xl flex flex-col items-center gap-3 hover:bg-indigo-900/30 transition-all border border-gray-700 hover:border-indigo-500"
                >
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="text-xl font-medium text-gray-100">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
                <motion.div 
                  className="w-48 h-48 md:w-64 md:h-64 mx-auto"
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-indigo-500/30 rounded-xl w-full h-full flex items-center justify-center backdrop-blur-sm">
  <div className="bg-gray-200 border-2 border-dashed rounded-xl overflow-hidden w-4/5 h-4/5 flex items-center justify-center">
    <img
      src={Avatar}
      alt="avatar"
      className="object-contain w-full h-full"
    />
  </div>
</div>

                </motion.div>
                
                <div className="flex justify-center gap-4 md:gap-6 mt-6 md:mt-8">
                  {[
                    { name: 'GitHub', href: 'https://github.com/Piyush731', icon: <AiFillGithub className="text-xl md:text-2xl" /> },
                    { name: 'Twitter', href: 'https://x.com/Piyush_k73', icon: <AiOutlineTwitter className="text-xl md:text-2xl" /> },
                    { name: 'LinkedIn', href: 'https://linkedin.com/in/piyush-kashyap731', icon: <FaLinkedinIn className="text-xl md:text-2xl" /> },
                    { name: 'Instagram', href: 'https://instagram.com/piyush_k731', icon: <AiFillInstagram className="text-xl md:text-2xl" /> },
                  ].map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -8, scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 md:p-4 bg-gray-700 rounded-full hover:bg-indigo-600 transition-colors text-white"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home2