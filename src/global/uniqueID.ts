const uniqId = () => {
  let id: Array<number> = [];

  return () => {
    id.push(id.length);
    return id.length;
  };
};
export const uIdTask = uniqId();
export const uIdComment = uniqId();
export const uIdAuthor = uniqId();
export const uIdStatus = uniqId();
export const uIdStatusTask = uniqId();
