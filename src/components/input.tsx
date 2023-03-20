export default function Input({
  title,
  type = 'text',
  labelClass,
  inputClass,
  ...rest
}: any) {
  return (
    <label className={labelClass} htmlFor={title.replace(/\s+/g, '_')}>
      <p>{title}</p>
      <input
        className={inputClass}
        type={type}
        id={title.replace(/\s+/g, '_')}
        {...rest}
      />
    </label>
  );
}
