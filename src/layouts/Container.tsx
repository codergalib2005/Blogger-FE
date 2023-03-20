import React from 'react';

type ContainerTypes = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerTypes) {
  return (
    <div className="container mx-auto max-w-[1290px] px-4">{children}</div>
  );
}
