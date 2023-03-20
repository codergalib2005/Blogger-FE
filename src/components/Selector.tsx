type SelectorTypes = {
  title: string;
  onChange?: any;
  className?: string;
};
export default function Selector({
  title,
  onChange,
  className,
}: SelectorTypes) {
  return (
    <label
      className={`flex items-center gap-2 select-none ${className}`}
      htmlFor={title.replace(/\s+/g, '_')}
    >
      <input
        id={title.replace(/\s+/g, '_')}
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-red-600 accent-red-400 focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600"
        type="checkbox"
        name={title.replace(/\s+/g, '_')}
        onChange={onChange}
      />{' '}
      <span>{title}</span>
    </label>
  );
}
