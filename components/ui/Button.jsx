export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
  }) {
    const base =
      "inline-flex items-center justify-center rounded-full text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
  
    const variants = {
      primary:
        "bg-blue-600 text-white px-5 py-2.5 hover:bg-blue-700 active:scale-[0.97] focus:ring-blue-500",
      outline:
        "border border-slate-200 text-slate-800 px-5 py-2.5 hover:border-blue-500 hover:text-blue-600 bg-white focus:ring-blue-500",
      ghost:
        "px-4 py-2 text-slate-600 hover:bg-slate-100 focus:ring-slate-400",
    };
  
    const styles = `${base} ${variants[variant]} ${className}`;
  
    return (
      <button className={styles} {...props}>
        {children}
      </button>
    );
  }
  