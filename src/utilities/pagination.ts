import { useMemo } from "react";


export const usePagination = (totalCount: number, pageSize: number, currentPage: number) => {

    const totalPageCount = Math.ceil(totalCount / pageSize);
    
    const paginationRange = useMemo(() => {
       // Our implementation logic will go here 
        
    }, [totalCount, pageSize, currentPage]);
  
    return paginationRange;
  };