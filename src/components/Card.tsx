import React, { FC } from "react";

interface ICardProps {
  width: string;
  height: string;
  background: string;
  children?: React.ReactNode;
  myClick?: () => void;
}
const Card: FC<ICardProps> = ({
  width,
  height,
  background,
  myClick,
  children,
}) => {
  return (
    <div style={{ width, height, background }} onClick={myClick}>
      {children}
    </div>
  );
};
export default Card;
