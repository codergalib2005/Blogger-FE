// type ButtonTypes = {
//   children: React.ReactNode;
//   onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
//   className?: string;
//   rest: any
// };
export default function Button({ children, className, ...rest }: any) {
  return (
    <button
      className={`bg-red-500 text-white py-2 px-6 rounded ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
