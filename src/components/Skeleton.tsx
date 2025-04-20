export const Skeleton = () => {
    return (
      <div role="status" className="w-full space-y-10">
        <div className="space-y-5">
        
          <div className="h-4 bg-gray-200 rounded w-40"></div>
  
      
          <div className="h-6 bg-gray-200 rounded w-[85%]"></div>
  
          
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-[95%]"></div>
            <div className="h-4 bg-gray-200 rounded w-[90%]"></div>
          </div>
  
          
          <div className="h-4 bg-gray-200 rounded w-36"></div>
        </div>
  
        <span className="sr-only">Loading...</span>
      </div>
    );
  };
  