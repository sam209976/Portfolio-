const ProjectCard = ({ name, description, tags, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        {/* Image removed */}
        
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div className='mt-4 flex items-center justify-end'>
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
