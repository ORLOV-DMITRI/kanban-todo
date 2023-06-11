type Comment = {
  id: string;
  author: string;
  text: string;
};
export type TaskType = {
  id: string;
  title: string;
  description: string;
  comment: Array<Comment>;
  status: string;
  author: string;
  isActive?: boolean;
};
