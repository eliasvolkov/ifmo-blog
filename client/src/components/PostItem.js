import React from "react";

export const PostItem = ({ title, categories, content }) => {
  return (
    <li className="list-group flex-row justify-content-between" >
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <span className="badge badge-warning align-self-start">{categories}</span>
    </li>
  );
};
