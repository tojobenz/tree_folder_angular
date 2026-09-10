export interface Item {
    id: number;
    title: string;
    parent: number | null;
    cabinet_id: number;
    isFolder: boolean;
    path: string;
    created_at?: string;
    updated_at?: string;
}

export interface FolderItem extends Item {
    isFolder: true;
    children?: Item[];
}

export interface FileItem extends Item {
    isFolder: false;
    size?: number;
    mimeType?: string;
}
