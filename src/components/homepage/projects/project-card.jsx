import {  FaEye } from 'react-icons/fa';
import { skillsImage } from '../../../../utils/skill-image';

function BrojectCard({ project }) {


  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <img
          src={project?.image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col ">

       
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {project?.title}
          </p>
      
        <a href={project?.url} target='_blank' rel="noopener noreferrer"  className='mb-2 text-sm text-[#1da1f2] flex items-center gap-1'>
          <FaEye />
          <span>view</span>
        </a>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {project?.description}
        </p>
       <div className='flex items-center flex-wrap gap-2 mt-auto'>
        {project.techs?.map((tech,i)=>(
          <img key={i} src={skillsImage(tech)} alt=""  className='w-5 h-5 object-cover'/>
        ))}
       </div>
      </div>
     
    </div>
  );
};

export default BrojectCard;