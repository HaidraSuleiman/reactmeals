export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input required name={id} id={id} {...props} />
    </p>
  );
}
