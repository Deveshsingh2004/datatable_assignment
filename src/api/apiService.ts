// api/apiService.ts
import axios from "axios";
import { ApiResponse } from "../types/types";

// Fetch data from API
export const fetchData = async (page: number, rowsPerPage: number) => {
    try {
        const response = await axios.get<ApiResponse>(
            `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${rowsPerPage}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

// Select records across multiple pages
export const selectRecordsAcrossPages = async (
    data: any[],
    rowSelectCount: number,
    currentPage: number,
    totalRecords: number,
    rowsPerPage: number
) => {
    let tempSelectedRows: any[] = [];

    // Select records from the current page
    const currentPageData = data.slice(0, rowSelectCount);
    tempSelectedRows = [...currentPageData];

    let remaining = rowSelectCount - currentPageData.length; // Remaining records to select
    remaining = remaining < 0 ? 0 : remaining;

    let nextPage = currentPage + 1;

    // Fetch data from subsequent pages until enough rows are selected
    while (remaining > 0 && nextPage <= Math.ceil(totalRecords / rowsPerPage)) {
        const response = await axios.get<ApiResponse>(
            `https://api.artic.edu/api/v1/artworks?page=${nextPage}&limit=${rowsPerPage}`
        );
        const nextPageData = response.data.data.slice(0, rowsPerPage);
        const recordsToSelect = nextPageData.slice(0, remaining);
        tempSelectedRows = [...tempSelectedRows, ...recordsToSelect];
        remaining -= recordsToSelect.length;
        nextPage++;
    }

    return tempSelectedRows;
};
