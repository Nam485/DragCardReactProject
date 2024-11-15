import { motion } from 'framer-motion';
import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { LuFileEdit } from 'react-icons/lu';

function Card({ data, refernce, onDelete, onEdit }) {
  const colorMap = {
    Green: "bg-green-600",
    Blue: "bg-blue-600",
    Red: "bg-red-600",
    Yellow: "bg-yellow-600",
  };

  return (
    <motion.div drag dragConstraints={refernce} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="relative min-w-[200px] max-w-[300px] max-h-80 rounded-[40px] bg-zinc-900/90 px-8 py-10 overflow-hidden flex-shrink-0">
      <FaRegFileAlt size="1.3em" color='#fff' />
      <p className="text-sm leading-tight mt-5 font-semibold text-zinc-200 ">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5 className="text-zinc-200">{data.filesize}</h5>
          <span className="flex items-center justify-center space-x-1">
            <IoClose size="1.2em" color="#fff" className='rounded-full bg-zinc-600 cursor-pointer' onClick={onDelete} />
            <LuFileEdit size="1.2em" color="#fff" className='rounded-full bg-zinc-600 cursor-pointer' onClick={onEdit} />
          </span>
        </div>
        {data.tag.isOpen ? (
          <div className={`tag w-full py-4 ${colorMap[data.tag.tagColor]} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold text-zinc-200">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
