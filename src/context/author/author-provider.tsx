import { ProviderType } from "../../types/context";
import { FC } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthorContext } from "./author-context";

export const AuthorProvider: FC<ProviderType> = ({ children }) => {
  const [author, setAuthor] = useState<string>(
    localStorage.getItem("author") || ""
  );

  useEffect(() => {
    localStorage.setItem("author", author);
  }, [author]);

  const authorSave = (author: string) => {
    setAuthor(author);
  };
  const authorDelete = () => {
    setAuthor("");
  };
  return (
    <AuthorContext.Provider
      value={{
        author,
        authorSave,
        authorDelete,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
};
