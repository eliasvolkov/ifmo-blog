import React, { memo } from "react";

export const PostItem = memo(({ _id, title, categories, content, handleDelete, handleEdit }) => {
  return (
    <li className="list-group flex-row justify-content-between list-group-item-action p-2" >
      <div>
        <h4>{title}</h4>
        <p>{content.slice(0, 100)}</p>
      </div>
      <div>
        <span className="badge badge-warning align-self-start">{categories}</span>
        <div className="icons d-flex justify-content-end mt-2">
          <i className="fa fa-pencil text-info mr-3" onClick={() => handleEdit(_id)} />
          <i className="fa fa-remove text-danger" onClick={() => handleDelete(_id)} />
        </div>
      </div>

    </li>
  );
});
