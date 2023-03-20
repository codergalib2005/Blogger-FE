import Link from 'next/link';

export default function NavLink({
  children,
  href = '/',
  className = '',
  ...rest
}: any) {
  return (
    <Link href={href} {...rest}>
      <a className={` cursor-pointer text-gray-300 ${className}`}>{children}</a>
    </Link>
  );
}
