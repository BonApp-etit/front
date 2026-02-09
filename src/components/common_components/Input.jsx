import { useField } from 'formik'
import clsx from 'clsx'
export default function Input({
  label = '',
  placeholder = '',
  type = '',
  variant = '',
  className = '',
  ...props
}) {
  const baseStyles =
    'mt-1 w-full rounded-lg bg-[#FFF6F4] border border-[#FFF6F4] px-4 py-2 font-poppins text-xs font-normal text-black placeholder:text-black/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cs500 md:text-sm lg:text-base'
  const variantClass = {
    outlined: 'border border-cs400',
  }

  const [field, meta] = useField(props)
  const id = props.name
  return (
    <div className="mb-1">
      <label
        htmlFor={id}
        className="font-poppins text-sm font-light text-black md:text-base lg:text-lg"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...props}
        {...field}
        placeholder={placeholder}
        className={clsx(baseStyles, variantClass[variant], className)}
      />
      {meta.touched && typeof meta.error ? (
        <div className="error font-roboto text-sm text-red-500 md:text-base lg:text-lg">
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}
