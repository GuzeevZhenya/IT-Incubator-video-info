import React from "react";
import { adidasArr } from "./PageOne";
import { Navigate, useParams } from "react-router-dom";
import { PATH } from "../../App";

export const Model = () => {
  const param = useParams();

  const adidasModel = adidasArr.filter((el) => el.id === param.id);
  const adidas = adidasArr.find((el) => el.id === param.id);
  if (!adidas) {
    if (param.id) {
      return <Navigate to={PATH.MODELERROR.replace(":id", param.id)} />;
    }
    return <div>Model not found</div>;
  }
  return (
    <div>
      <div>
        {adidasModel.map((el) => {
          return (
            <div>
              <p>{el.model}</p>
              <p>{el.collection}</p>
              <p>{el.price}</p>
              <img
                src={el.picture}
                alt={el.model}
                style={{ width: "200px", height: "auto", marginRight: "10px" }}
              />
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <p>{adidas?.model}</p>
          <p>{adidas?.collection}</p>
          <p>{adidas?.price}</p>
          <img
            src={adidas?.picture}
            alt={adidas?.model}
            style={{ width: "200px", height: "auto", marginRight: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};
