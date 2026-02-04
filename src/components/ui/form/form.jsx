function Form({ children, onSubmit, className = "" }) {
  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className={`
        w-full
        space-y-5
        ${className}
      `}
    >
      {children}
    </form>
  );
}

export default Form;
