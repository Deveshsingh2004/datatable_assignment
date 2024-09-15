// import React, { useState, useEffect, useRef } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { OverlayPanel } from "primereact/overlaypanel";
// import { fetchData, selectRecordsAcrossPages } from "../api/apiService";
// import { ArtData } from "../types/types";

// const DataTableComponent: React.FC = () => {
//   const [data, setData] = useState<ArtData[]>([]);
//   const [selectedRows, setSelectedRows] = useState<ArtData[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [totalRecords, setTotalRecords] = useState<number>(0);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [rowSelectCount, setRowSelectCount] = useState<number>(0);
//   const [rowsPerPage, setRowsPerPage] = useState<number>(12); // Rows per page

//   const overlayPanelRef = useRef<OverlayPanel>(null);

//   // Fetch data whenever the current page changes
//   useEffect(() => {
//     loadData(currentPage);
//   }, [currentPage]);

//   const loadData = async (page: number) => {
//     setLoading(true);
//     const response = await fetchData(page);
//     if (response) {
//       setData(response.data);
//       setRowsPerPage(response.data.length);
//       setTotalRecords(response.pagination.total);
//     }
//     setLoading(false);
//   };

//   const handleCustomSelect = async () => {
//     const tempSelectedRows = await selectRecordsAcrossPages(
//       data,
//       rowSelectCount,
//       currentPage,
//       totalRecords,
//       rowsPerPage
//     );
//     setSelectedRows(tempSelectedRows);
//     overlayPanelRef.current?.hide(); // Hide overlay after selection
//   };

//   const onPageChange = (e: any) => {
//     setCurrentPage(e.page + 1);
//   };

//   const titleHeaderTemplate = (
//     <div style={{ display: "flex", alignItems: "center" }}>
//       <span>Title</span>
//       <i
//         className="pi pi-chevron-down"
//         style={{ marginLeft: "8px", cursor: "pointer" }}
//         onClick={(e) => overlayPanelRef.current?.toggle(e)} // Show/hide overlay on click
//       ></i>
//     </div>
//   );

//   return (
//     <div className="datatable-demo">
//       <h3>ArtWork Data Table</h3>

//       {/* DataTable with server-side pagination */}
//       <DataTable
//         value={data}
//         paginator
//         lazy
//         selectionMode="multiple"
//         rows={rowsPerPage}
//         totalRecords={totalRecords}
//         onPage={onPageChange}
//         loading={loading}
//         selection={selectedRows}
//         onSelectionChange={(e) =>
//           setSelectedRows(Array.isArray(e.value) ? e.value : [e.value])
//         }
//       >
//         <Column selectionMode="multiple" headerStyle={{ width: "3em" }} />
//         <Column field="title" header={titleHeaderTemplate} />
//         <Column field="place_of_origin" header="Place of Origin" />
//         <Column field="artist_display" header="Artist Display" />
//         <Column field="inscriptions" header="Inscriptions" />
//         <Column field="date_start" header="Date Start" />
//         <Column field="date_end" header="Date End" />
//       </DataTable>

//       {/* Custom selection input panel */}
//       <OverlayPanel ref={overlayPanelRef}>
//         <input
//           type="number"
//           value={rowSelectCount}
//           onChange={(e) => setRowSelectCount(Number(e.target.value))}
//           placeholder="Number of rows..."
//         />
//         <button onClick={handleCustomSelect}>Submit</button>
//       </OverlayPanel>
//     </div>
//   );
// };

// export default DataTableComponent;
