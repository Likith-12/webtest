import './css/input.scss'
const Input = ({ type, name, label }) => {
  return (
    <div class="Name">
      <input
        type={type}
        name={name}
        autocomplete="off"
        required
      />
      <label for="name" class="labelName">
        <span class="contentName">
          {label}
        </span>
      </label>
    </div>
  )
}
export default Input
