export interface Item {
    title: string;
    id: string | number;
    parent?: any;
    cabinet_id: string|number;
    isFolder: any;
    path: string;
    created_at?: any;
    updated_at?: any;
  }