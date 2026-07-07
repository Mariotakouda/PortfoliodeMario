interface TitleProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}

const Title = ({ eyebrow, title, align = "left" }: TitleProps) => {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <span className="font-mono-ui text-xs md:text-sm text-mint tracking-wide">
        {`// ${eyebrow}`}
      </span>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mt-2 tracking-tight">
        {title}
      </h2>
      <div className={`mt-5 h-px w-16 bg-border ${isCenter ? "mx-auto" : ""}`} />
    </div>
  );
};

export default Title;
