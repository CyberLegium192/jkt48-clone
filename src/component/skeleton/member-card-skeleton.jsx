import Skeleton from '@mui/joy/Skeleton';

const MemberCardSkeleton = () => {
  return (
    <div className='p-2 w-full z-40 border-2 border-slate-200 rounded-xl'>
      
      {/* Skeleton untuk gambar */}
      <Skeleton variant="rectangular" width="100%" height="176px" className="rounded-lg border-2 border-white mb-2" />

      {/* Skeleton untuk nama */}
      <div className="rounded-t-sm rounded-b-lg px-2 py-1 flex flex-col justify-center items-center gap-y-0.5 h-16 bg-white shadow-sm">
        <Skeleton variant="text" width="80%" height="24px" />
      </div>
    </div>
  );
};

export default MemberCardSkeleton;
