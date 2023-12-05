export interface Todo {
  _id: number | null;
  title: string;
  isCompleted: boolean;
  priority: Priority;
}

export type Priority =
  | { title: 'High'; value: 1 }
  | { title: 'Medium'; value: 2 }
  | { title: 'Low'; value: 3 };
