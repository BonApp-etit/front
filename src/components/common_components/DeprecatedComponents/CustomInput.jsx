import TextField from '@mui/material/TextField'
const CustomInput = ({
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  helperText,
  customWidth,
  customHeight,
}) => {
  return (
    <div className={`mb-4 w-full max-w-md ${customWidth ? customWidth : ''}`}>
      <label className="mb-2 block text-lg font-medium">{label}</label>
      <TextField
        fullWidth
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        className={`bg-red-50 ${customHeight ? customHeight : ''}`}
      />
    </div>
  )
}

export default CustomInput
