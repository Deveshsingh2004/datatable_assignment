// types/types.ts
export type ArtData = {
    id: number;
    title: string;
    place_of_origin: string;
    artist_display: string;
    inscriptions: string;
    date_start: number;
    date_end: number;
};

export type ApiResponse = {
    data: ArtData[];
    pagination: {
        total: number;
    };
};
