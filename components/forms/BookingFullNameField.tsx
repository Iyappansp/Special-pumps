import styles from "./BookingFullNameField.module.css"

type Props = {
  id?: string
  name?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  required?: boolean
  autoComplete?: string
  className?: string
}

export default function BookingFullNameField({
  id = "fullName",
  name = "fullName",
  value,
  onChange,
  placeholder = "Enter your full name",
  required = true,
  autoComplete = "name",
  className,
}: Props) {
  return (
    <div className={`${styles.bookingNameField} ${className ?? ""}`}>
      <label htmlFor={id}>Full Name</label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-label="Full Name"
      />
    </div>
  )
}
