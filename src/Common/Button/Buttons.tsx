import "./Buttons.css";

interface buttonType {
  theme?: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: React.CSSProperties | undefined;
  className?: string;
}
export function Button({
  theme = "light",
  text,
  onClick,
  style,
  className,
}: buttonType) {
  return (
    <button
      onClick={onClick}
      style={style}
      className={
        className
          ? className + " custom-button " + theme
          : "custom-button " + theme
      }
    >
      {text}
    </button>
  );
}
