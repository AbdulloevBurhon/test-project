function Spinner({ size = 20, color = "white" }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderTopColor: color,
      }}
      className="
        inline-block
        rounded-full
        border-2
        border-white/30
        animate-spin
      "
    />
  );
}

export default Spinner;
