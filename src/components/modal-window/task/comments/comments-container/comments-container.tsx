import { FC, useState, ChangeEvent } from "react";
import { CommentFormAdd } from "../comment-form-add/comment-form-add";
import { CommentsList } from "../comments-list/comments-list";
import { ICONS } from "../../../../../constants/icons";
import { TaskDetailType } from "../../../../../types/modal";
import "../comment.css";
import { CommentType } from "../../../../../types/global";
import { v1 } from "uuid";
import { CommentsContext } from "../../../../../context/comments/comments-context";
import { CommentsProvider } from "../../../../../context/comments/comments-provider";

export const CommentsContainer: FC<TaskDetailType> = ({ task, taskUpdate }) => {
  const [comment, setComment] = useState<string>("");

  // const commentSave = () => {
  //   const newComment: CommentType = {
  //     id: v1(),
  //     author: task.author,
  //     text: comment,
  //   };
  //   task.comments = [newComment, ...task.comments];
  //   taskUpdate(task);
  //   setComment("");
  // };
  // const commentDelete = (id: string) => {
  //   task.comments.filter((comment) => comment.id !== id);
  //   taskUpdate(task);
  // };
  // const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   setComment(e.target.value);
  // };

  return (
    <CommentsProvider>
      <div className="comment">
        <div className="comment__title">
          {ICONS.comment()}
          <h3>Коментарии</h3>
        </div>
        <CommentFormAdd
          task={task}
          // comment={comment}
          // onChangeComment={handleChangeComment}
          // onSaveComment={commentSave}
        />
        <div className="comment__all">
          <CommentsList task={task} onDeleteComment={setComment} />
        </div>
      </div>
    </CommentsProvider>
  );
};
